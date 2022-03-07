import { UserRole } from "@prisma/client"
import groupBy from "lodash.groupby"
import Layout from "~/components/Layout"
import { LoaderFunction, ActionFunction, useLoaderData, Link } from "remix"
import { handlePostRelatedActions } from "~/action-handlers/card-action-handlers.server"

import { navItems } from "~/components/CategoriesNav"
import InteractionCard from "~/components/Post"
import { getLoggedInUser } from "~/services/auth/session.server"
import {
  formatInteractionData,
  FormattedInteractionsPostData,
} from "~/services/db/formatters.server"
import {
  findInteractionsForCategory,
  findPostReactedByUser,
} from "~/services/db/queries/post.server"

import { apiHandler } from "~/utils/api-handler"
import EmptyState from "~/components/Liked/EmptyState"

interface Props {}

interface LoaderData {
  interactions: FormattedInteractionsPostData[]
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getLoggedInUser(request)

  const interactions = formatInteractionData(
    await findPostReactedByUser({ userId: user?.id }),
  )

  return { interactions }
}

export const action: ActionFunction = apiHandler({
  POST: {
    handler: handlePostRelatedActions,
    protect: true,
    allowedRoles: [UserRole.USER],
  },
})

const LikedPage: React.FC<Props> = () => {
  const { interactions } = useLoaderData<LoaderData>()

  // console.log({ interactions })

  return (
    <>
      <Layout>
        {
          <div>
            {interactions.length > 0 ? (
              <div className="sm:px-6 lg:px-8">
                <InteractionCard interactions={interactions} />
              </div>
            ) : (
              <EmptyState />
            )}
          </div>
        }
      </Layout>
    </>
  )
}

export default LikedPage
