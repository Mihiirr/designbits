import { ZodObject, ZodRawShape } from "zod"
import { db } from "~/services/db/client.server"
import {
  AddCommentActionSchema,
  CommentLikeActionSchema,
} from "~/services/validations/action-schemas.server"
import {
  handleFormSubmission,
  TypedResponse,
} from "~/utils/handle-forms.server"
import {
  BadRequestException,
  OkResponse,
} from "~/utils/response-helpers.server"
type Props = {
  form: {
    [k: string]: FormDataEntryValue
  }
  request: Request
}

export type HandleFormSubmissionFn<T extends ZodObject<ZodRawShape>> = (
  props: Props,
) => Promise<TypedResponse<T>>

export const handleCreateComment: HandleFormSubmissionFn<
  typeof AddCommentActionSchema
> = ({ form }) => {
  return handleFormSubmission({
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
      return OkResponse({
        data,
        errors: null,
      })
    },
  })
}

export const handleCommentLikeAction: HandleFormSubmissionFn<
  typeof CommentLikeActionSchema
> = ({ form }: Props) => {
  return handleFormSubmission({
    form,
    validationSchema: CommentLikeActionSchema,
    handleFormValues: async formData => {
      const { commentId, userId } = formData

      const data = await db.commentReaction.create({
        data: {
          Comment: {
            connect: {
              id: commentId,
            },
          },
          ReactedBy: {
            connect: {
              id: userId,
            },
          },
          reaction: "LIKE",
        },
      })
      return OkResponse({
        data,
        errors: null,
      })
    },
  })
}

export const handleCommentUndoLikeAction: HandleFormSubmissionFn<
  typeof CommentLikeActionSchema
> = ({ form }: Props) => {
  return handleFormSubmission({
    form,
    validationSchema: CommentLikeActionSchema,
    handleFormValues: async formData => {
      const { commentId, userId } = formData

      const reaction = await db.commentReaction.findUnique({
        where: {
          commentId_reactedBy: {
            commentId,
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

      const unlikedComment = await db.commentReaction.delete({
        where: {
          id: reaction.id,
        },
      })
      return OkResponse({
        data: unlikedComment,
        errors: null,
      })
    },
  })
}
