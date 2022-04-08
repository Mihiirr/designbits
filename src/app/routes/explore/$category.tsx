import { Device, Platfrom, UserRole } from "@prisma/client"
import groupBy from "lodash.groupby"
import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
} from "remix"
import { handlePostRelatedActions } from "~/api-handlers/card-api-handlers.server"
import { navItems } from "~/components/CategoriesNav"
import Header from "~/components/Comments/Header"
import Posts from "~/components/Posts"
import { SortAndFilterProvider } from "~/context-modules/SortAndFilterContext"
import { getLoginInfoSession } from "~/services/auth/login.server"
import { getLoggedInUser } from "~/services/auth/session.server"
import { formatInteractionPostsData } from "~/services/db/formatters.server"
import {
  findInteractionsForCategory,
  PostsOrderBy,
} from "~/services/db/queries/post.server"
import { apiHandler } from "~/utils/api-handler"
import { OkResponse } from "~/utils/response-helpers.server"

interface Props {}
type ErrorMessage = string
type NoError = null
export interface ResponseData<T> extends Response {
  ok: boolean
  data: T
  errors: { [field: string]: ErrorMessage | NoError } | null
}

type LoaderData = ResponseData<{
  category: string
  interactions: ReturnType<typeof formatInteractionPostsData>
  orderBy: PostsOrderBy
}>

const categoryMap = groupBy(navItems, "id")

export const loader: LoaderFunction = async ({ params, request }) => {
  const categoryId = params.category
  const url = new URL(request.url)
  const sortBy = url.searchParams.get("sort")
  const deviceFilter = url.searchParams.get("device")
  const platformsFilterStr =
    url.searchParams.get("platforms")?.split(",&") || []
  const indistriesFilterStr =
    url.searchParams.get("industries")?.split(",&") || []

  const platformFilter =
    platformsFilterStr?.[0] !== "all"
      ? Object.entries(Platfrom)
          .filter(([platformId]) =>
            platformsFilterStr.includes(platformId.toLowerCase()),
          )
          ?.map(([platformId]) => Platfrom[platformId as keyof typeof Platfrom])
      : []
  const industriesFilter =
    indistriesFilterStr?.[0] !== "all" ? indistriesFilterStr : []

  console.log({ platformFilter })

  let orderBy: PostsOrderBy | undefined =
    sortBy === "recently-added" || sortBy === "popular" ? sortBy : undefined

  console.log({ deviceFilter })
  if (!categoryId) {
    return
  }
  const session = await getLoginInfoSession(request)
  const user = await getLoggedInUser(request)
  if (orderBy) {
    session.setSortPreference(orderBy)
  } else {
    orderBy = session.getSortPreference()
  }

  const interactions = formatInteractionPostsData(
    await findInteractionsForCategory({
      userId: user?.id,
      orderBy,
      filters: {
        device: Object.keys(Device).filter(
          deviceKey => deviceKey.toLowerCase() === deviceFilter?.toLowerCase(),
        )?.[0] as Device,
        platforms: platformFilter,
        industries: industriesFilter,
      },
    }),
    orderBy,
  )

  return OkResponse({
    data: { category: categoryMap[categoryId][0].name, interactions, orderBy },
    errors: [],
    headers: await session.getHeaders(),
  })
}

export const action: ActionFunction = apiHandler({
  POST: {
    handler: handlePostRelatedActions,
    protect: true,
    allowedRoles: [UserRole.USER],
  },
})

const CategoryPage: React.FC<Props> = () => {
  const { data } = useLoaderData<LoaderData>()
  const { category, interactions, orderBy } = data ?? {}

  return (
    <>
      <SortAndFilterProvider initSortBy={data.orderBy}>
        <Header category={category} orderBy={orderBy} />
      </SortAndFilterProvider>
      <main>
        <div className="sm:px-6 lg:px-8">
          <Posts interactions={interactions} />
        </div>
      </main>
    </>
  )
}

export const meta: MetaFunction = ({ params }) => {
  const categoryId = params.category || ""

  return {
    title:
      (categoryMap[categoryId]?.[0]?.name || "") + " interactions | DesignBits",
    description: `discover ${categoryId} interactions.`,
  }
}

export default CategoryPage
