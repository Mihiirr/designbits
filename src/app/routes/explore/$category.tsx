import { XIcon } from "@heroicons/react/outline"
import { UserRole } from "@prisma/client"
import groupBy from "lodash.groupby"
import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
} from "remix"
import { useBoolean } from "usehooks-ts"
import { handlePostRelatedActions } from "~/api-handlers/card-api-handlers.server"
import { navItems } from "~/components/CategoriesNav"
import FilterPane from "~/components/Filters/FilterPane"
import FilterIcon from "~/components/icons/Filter"
import Posts from "~/components/Posts"
import SortDropdown from "~/components/SortDropdown"
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
  let orderBy: PostsOrderBy | undefined =
    sortBy === "recently-added" || sortBy === "popular" ? sortBy : undefined

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
  const { value: isFiltersShown, toggle: toggleFilters } = useBoolean(false)
  return (
    <>
      <header>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              {category}
            </h1>
            <div className="flex space-x-4 text-sm text-gray-600">
              <button
                className="flex w-full items-center justify-center space-x-2 rounded-md px-4 py-1.5 hover:bg-indigo-200/20 focus-visible:ring-2 focus-visible:ring-white/75"
                onClick={toggleFilters}
              >
                {isFiltersShown ? (
                  <>
                    <XIcon
                      height={20}
                      width={20}
                      role="presentation"
                      aria-hidden
                    />
                    <span>Clear Filters</span>
                  </>
                ) : (
                  <>
                    <FilterIcon
                      height={20}
                      width={20}
                      role="presentation"
                      aria-hidden
                    />
                    <span>Filters</span>
                  </>
                )}
              </button>
              <SortDropdown initValue={orderBy} />
            </div>
          </div>
          <FilterPane isFiltersShown={true} />
        </div>
      </header>
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
