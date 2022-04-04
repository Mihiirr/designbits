import { UserRole } from "@prisma/client"
import groupBy from "lodash.groupby"
import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
} from "remix"
import { handlePostRelatedActions } from "~/api-handlers/card-api-handlers.server"
import { navItems } from "~/components/CategoriesNav"
import FilterIcon from "~/components/icons/Filter"
import InteractionCard from "~/components/Post"
import SortDropdown from "~/components/SortDropdown"
import { getLoggedInUser } from "~/services/auth/session.server"
import {
  formatInteractionPostsData,
  FormattedInteractionsPostData,
} from "~/services/db/formatters.server"
import { findInteractionsForCategory } from "~/services/db/queries/post.server"
import { apiHandler } from "~/utils/api-handler"

interface Props {}

interface LoaderData {
  category: string
  interactions: FormattedInteractionsPostData[]
}

const categoryMap = groupBy(navItems, "id")

export const loader: LoaderFunction = async ({ params, request }) => {
  const categoryId = params.category
  const url = new URL(request.url)
  const sortBy = url.searchParams.get("sort")
  const orderBy =
    sortBy === "recently-added" || sortBy === "popular" ? sortBy : undefined

  if (!categoryId) {
    return
  }
  const user = await getLoggedInUser(request)

  const interactions = formatInteractionPostsData(
    await findInteractionsForCategory({ userId: user?.id, orderBy }),
  )

  return { category: categoryMap[categoryId][0].name, interactions }
}

export const action: ActionFunction = apiHandler({
  POST: {
    handler: handlePostRelatedActions,
    protect: true,
    allowedRoles: [UserRole.USER],
  },
})

const CategoryPage: React.FC<Props> = () => {
  const { category, interactions } = useLoaderData<LoaderData>()
  return (
    <>
      <header>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              {category}
            </h1>
            <div className="flex space-x-4 text-sm text-gray-600">
              <button className="flex w-full items-center justify-center space-x-2 rounded-md px-4 py-1.5 hover:bg-indigo-200/20 focus-visible:ring-2 focus-visible:ring-white/75">
                <FilterIcon
                  height={20}
                  width={20}
                  role="presentation"
                  aria-hidden
                />
                <span>Filter</span>
              </button>
              <SortDropdown />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="sm:px-6 lg:px-8">
          <InteractionCard interactions={interactions} />
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
