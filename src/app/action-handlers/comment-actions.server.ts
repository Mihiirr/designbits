import { db } from "~/services/db/client.server"
import { AddCommentActionSchema } from "~/services/validations/action-schemas.server"
import { CommentActionFormData } from "~/types/utilities"
import { handleFormSubmission } from "~/utils/actions.server"
import { ProtectedActionFunction } from "~/utils/api-handler"
import { COMMENT_ACTIONS } from "~/utils/constants"
import { OkResponse } from "~/utils/response-helpers.server"
import type { Descendant } from "slate"
import { isCustomElement, isMentionElement } from "~/utils/editor"
import { MentionElement } from "~/types/editor"

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

function parseComment(comment: string): Descendant[] | null {
  try {
    return JSON.parse(comment)
  } catch (error) {
    return null
  }
}

function findMentionElements(parsedComment: Descendant[]): MentionElement[] {
  const mentions: MentionElement[] = []

  parsedComment.forEach(node => {
    if (isMentionElement(node)) {
      mentions.push(node)
    } else if (isCustomElement(node) && node.children.length > 0) {
      mentions.push(...findMentionElements(node.children))
    }
  })
  return mentions
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

      const parsedComment = parseComment(comment)

      if (parsedComment) {
        const mentionElements = findMentionElements(parsedComment)

        if (mentionElements.length > 0) {
          await db.mention.createMany({
            data: mentionElements.map(mention => {
              return {
                commentId: data.id,
                userId: mention.userId,
              }
            }),
          })
        }
      }

      return OkResponse(data)
    },
  })
}
