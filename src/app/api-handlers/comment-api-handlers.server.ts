import { ZodObject, ZodRawShape } from "zod"
import { getLoggedInUser } from "~/services/auth/session.server"
import { db } from "~/services/db/client.server"
import {
  AddCommentActionSchema,
  CommentLikeActionSchema,
  FetchCommentRepliesSchema,
} from "~/services/validations/action-schemas.server"
import { CommentActionFormData } from "~/types/utilities"
import { ProtectedActionFunction } from "~/utils/api-handler"
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
    [k: string]: FormDataEntryValue | null
  }
  request: Request
}

export const fetchCommentReplies: ProtectedActionFunction = async ({
  request,
}) => {
  const formData = await request.formData()
  const { _action, ...formValues } = Object.fromEntries(
    formData,
  ) as CommentActionFormData
  const user = await getLoggedInUser(request)

  return handleFetchCommentReplies({
    form: { ...formValues, userId: user?.id || null },
    request,
  })
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
      const { postId, userId, comment, parentCommentId } = formData

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
          ...(parentCommentId
            ? { ParentComment: { connect: { id: parentCommentId } } }
            : {}),
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

export const handleFetchCommentReplies: HandleFormSubmissionFn<
  typeof FetchCommentRepliesSchema
> = ({ form }: Props) => {
  return handleFormSubmission({
    form,
    validationSchema: FetchCommentRepliesSchema,
    handleFormValues: async formData => {
      const { parentCommentId, userId } = formData

      const commentReplies = await db.comment.findMany({
        select: {
          id: true,
          comment: true,
          createdAt: true,
          CreatedBy: {
            select: {
              id: true,
              profilePicture: true,
              name: true,
            },
          },
          CommentReactions: userId
            ? {
                select: {
                  reaction: true,
                },
                where: {
                  reactedBy: userId,
                },
              }
            : false,
          _count: {
            select: {
              CommentReactions: true,
            },
          },
        },
        where: {
          parentCommentId,
        },
        orderBy: {
          createdAt: "desc",
        },
      })

      return OkResponse({
        data: commentReplies.map(({ CommentReactions, _count, ...rest }) => {
          return {
            reactedByLoggedInUser: CommentReactions?.length ? true : false,
            reactionsCount: _count?.CommentReactions,
            ...rest,
          }
        }),
        errors: null,
      })
    },
  })
}
