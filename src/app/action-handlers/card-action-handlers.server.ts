import { PostReactionTypes } from "@prisma/client"
import { CARD_ACTIONS } from "~/components/Post/InteractionCard"
import { db } from "~/services/db/client.server"
import { LikeActionSchema } from "~/services/validations/action-schemas.server"
import { ActionFormData } from "~/types/utilities"
import { handleFormSubmission } from "~/utils/actions.server"
import { ProtectedActionFunction } from "~/utils/api-handler"
import { successResponse } from "~/utils/response-helpers.server"

export const handlePostRelatedActions: ProtectedActionFunction = async ({
  request,
  user,
}) => {
  const formData = await request.formData()
  const { _action, ...formValues } = Object.fromEntries(
    formData,
  ) as ActionFormData

  switch (_action) {
    case CARD_ACTIONS.LIKE:
      return handleLikeAction({
        form: { ...formValues, userId: user.id },
        request,
      })

    case CARD_ACTIONS.COMMENT:
      break

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
    postId: string
  }
}

type Props = {
  form: {
    [k: string]: FormDataEntryValue
  }
  request: Request
}

export async function handleLikeAction({ form }: Props): Promise<Response> {
  return handleFormSubmission<LikeActionData, typeof LikeActionSchema>({
    form,
    validationSchema: LikeActionSchema,
    handleFormValues: async formData => {
      const { postId, userId } = formData

      const data = await db.postReaction.create({
        data: {
          Post: {
            connect: {
              id: postId,
            },
          },
          ReactedBy: {
            connect: {
              id: userId,
            },
          },
          reaction: PostReactionTypes.LIKE,
        },
      })
      return successResponse(data)
    },
  })
}
