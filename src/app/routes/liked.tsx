import { UserRole } from "@prisma/client"
import Layout from "~/components/Layout"
import { LoaderFunction, ActionFunction, useLoaderData } from "remix"
import InteractionCard from "~/components/Post"
import { getLoggedInUser } from "~/services/auth/session.server"
import {
  formatInteractionPostsData,
  FormattedInteractionsPostData,
} from "~/services/db/formatters.server"
import { findPostReactedByUser } from "~/services/db/queries/post.server"

import { apiHandler } from "~/utils/api-handler"
import EmptyState from "~/components/Liked/EmptyState"
import { handlePostRelatedActions } from "~/action-handlers/card-actions.server"

interface Props {}

interface LoaderData {
  interactions: FormattedInteractionsPostData[]
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getLoggedInUser(request)

  const interactions = formatInteractionPostsData(
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

  return (
    <>
      <Layout>
        {
          <div>
            {interactions.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="sm:px-6 lg:px-8">
                <InteractionCard interactions={interactions} />
              </div>
            )}
          </div>
        }
      </Layout>
    </>
  )
}

export default LikedPage
