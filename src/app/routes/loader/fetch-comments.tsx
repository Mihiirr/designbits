import { UserRole } from "@prisma/client"
import { LoaderFunction, redirect } from "remix"
import { fetchCommentReplies } from "~/api-handlers/comment-api-handlers.server"
import { apiHandler } from "~/utils/api-handler"

type Props = {}

const FetchComments = (props: Props) => {
  return <div>Oops... You should not see this.</div>
}

export const action = apiHandler({
  POST: {
    protect: true,
    handler: fetchCommentReplies,
    allowedRoles: [UserRole.USER],
  },
})

export const loader: LoaderFunction = () => {
  redirect("/", { status: 404 })
}

export default FetchComments
