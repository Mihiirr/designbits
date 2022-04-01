import { PostReactionTypes } from "@prisma/client"
import { db } from "~/services/db/client.server"
import { LikeActionSchema } from "~/services/validations/action-schemas.server"
import { CardActionFormData } from "~/types/utilities"
import { handleFormSubmission } from "~/utils/handle-forms.server"
import { ProtectedActionFunction } from "~/utils/api-handler"
import { CARD_ACTIONS, COMMENT_ACTIONS } from "~/utils/constants"
import {
  BadRequestException,
  OkResponse,
} from "~/utils/response-helpers.server"
import {
  handleCommentLikeAction,
  handleCommentUndoLikeAction,
  handleCreateComment,
  HandleFormSubmissionFn,
} from "./comment-action-handlers.server"

export const handlePostRelatedActions: ProtectedActionFunction = async ({
  request,
  user,
}) => {
  const formData = await request.formData()
  const { _action, ...formValues } = Object.fromEntries(
    formData,
  ) as CardActionFormData

  console.log(formValues)

  switch (_action) {
    case CARD_ACTIONS.LIKE:
      return handlePostLikeAction({
        form: { ...formValues, userId: user.id },
        request,
      })

    case CARD_ACTIONS.UNDO_LIKE:
      return handleUndoLikeAction({
        form: { ...formValues, userId: user.id },
        request,
      })

    case COMMENT_ACTIONS.CREATE_COMMENT:
      return handleCreateComment({
        form: { ...formValues, userId: user.id },
        request,
      })

    case COMMENT_ACTIONS.LIKE_COMMENT:
      return handleCommentLikeAction({
        form: { ...formValues, userId: user.id },
        request,
      })

    case COMMENT_ACTIONS.UNDO_LIKE:
      return handleCommentUndoLikeAction({
        form: { ...formValues, userId: user.id },
        request,
      })

    default:
      break
  }
}

type Props = {
  form: {
    [k: string]: FormDataEntryValue
  }
  request: Request
}

export const handlePostLikeAction: HandleFormSubmissionFn<
  typeof LikeActionSchema
> = ({ form }: Props) => {
  return handleFormSubmission({
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
      return OkResponse({
        data,
        errors: null,
      })
    },
  })
}

export const handleUndoLikeAction: HandleFormSubmissionFn<
  typeof LikeActionSchema
> = ({ form }: Props) => {
  return handleFormSubmission({
    form,
    validationSchema: LikeActionSchema,
    handleFormValues: async formData => {
      const { postId, userId } = formData

      const reaction = await db.postReaction.findUnique({
        where: {
          postId_reactedBy: {
            postId,
            reactedBy: userId,
          },
        },
      })

      if (!reaction) {
        return BadRequestException({
          data: null,
          errors: {
            postId: "reaction not found",
          },
        })
      }

      const unlikedPost = await db.postReaction.delete({
        where: {
          id: reaction.id,
        },
      })
      return OkResponse({
        data: unlikedPost,
        errors: null,
      })
    },
  })
}
