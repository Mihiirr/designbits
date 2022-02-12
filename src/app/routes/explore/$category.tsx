import { UserRole } from "@prisma/client"
import groupBy from "lodash.groupby"
import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
} from "remix"
import { handlePostRealtedActions } from "~/action-handlers/card-action-handlers.server"
import { navItems } from "~/components/CategoriesNav"
import InteractionCard from "~/components/Post"
import { getLoggedInUser } from "~/services/auth/session.server"
import {
  formatInteractionData,
  FormattedInteractionsPostData,
} from "~/services/db/formatters.server"
import { findInteractionsForCategory } from "~/services/db/queries/post.server"
import apiHandler from "~/utils/api-handler.server"

interface Props {}

interface LoaderData {
  category: string
  interactions: FormattedInteractionsPostData[]
}

const categoryMap = groupBy(navItems, "id")

export const loader: LoaderFunction = async ({ params, request }) => {
  const categoryId = params.category
  if (!categoryId) {
    return
  }
  const user = await getLoggedInUser(request)

  const interactions = formatInteractionData(
    await findInteractionsForCategory({ userId: user?.id }),
  )

  return { category: categoryMap[categoryId][0].name, interactions }
}

export const action: ActionFunction = apiHandler({
  POST: {
    handler: handlePostRealtedActions,
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
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {category}
          </h1>
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
