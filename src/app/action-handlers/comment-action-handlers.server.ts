import { db } from "~/services/db/client.server"
import { AddCommentActionSchema } from "~/services/validations/action-schemas.server"
import { CommentActionFormData } from "~/types/utilities"
import { handleFormSubmission } from "~/utils/actions.server"
import { ProtectedActionFunction } from "~/utils/api-handler"
import { COMMENT_ACTIONS } from "~/utils/constants"
import { successResponse } from "~/utils/response-helpers.server"

export const handleCommentActions: ProtectedActionFunction = async ({
  request,
  user,
}) => {
  const formData = await request.formData()
  const { _action, ...formValues } = Object.fromEntries(
    formData,
  ) as CommentActionFormData

  console.log({ _action, formValues })

  switch (_action) {
    case COMMENT_ACTIONS.CREATE_COMMENT:
      return handleCreateComment({
        form: { ...formValues, userId: user.id },
        request,
      })

    // case CARD_ACTIONS.UNDO_LIKE:
    //   return handleUndoLikeAction({
    //     form: { ...formValues, userId: user.id },
    //     request,
    //   })

    default:
      break
  }
}

type ErrorMessage = string
type NoError = null
export type LikeActionData = {
  status: "success" | "error"
  errors: {
    postId: ErrorMessage | NoError
  }
  fields: {
    comment: string
    postId: string
  }
}

type Props = {
  form: {
    [k: string]: FormDataEntryValue
  }
  request: Request
}

export async function handleCreateComment({ form }: Props): Promise<Response> {
  return handleFormSubmission<LikeActionData, typeof AddCommentActionSchema>({
    form,
    validationSchema: AddCommentActionSchema,
    handleFormValues: async formData => {
      const { postId, userId, comment } = formData

      const data = await db.comment.create({
        data: {
          Post: {
            connect: {
              id: postId,
            },
          },
          CreatedBy: {
            connect: {
              id: userId,
            },
          },
          comment: comment,
        },
      })
      return successResponse(data)
    },
  })
}
