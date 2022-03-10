import { Descendant } from "slate"
import { ZodObject, ZodRawShape } from "zod"
import { db } from "~/services/db/client.server"
import { AddCommentActionSchema } from "~/services/validations/action-schemas.server"
import { MentionElement } from "~/types/editor"
import { isCustomElement, isMentionElement } from "~/utils/editor"
import {
  handleFormSubmission,
  TypedResponse,
} from "~/utils/handle-forms.server"
import { OkResponse } from "~/utils/response-helpers.server"
type Props = {
  form: {
    [k: string]: FormDataEntryValue
  }
  request: Request
}

export type HandleFormSubmissionFn<T extends ZodObject<ZodRawShape>> = (
  props: Props,
) => Promise<TypedResponse<T>>

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

      return OkResponse({
        data,
        errors: null,
      })
    },
  })
}
