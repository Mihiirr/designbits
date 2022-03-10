import { ZodObject, ZodRawShape } from "zod"
import { db } from "~/services/db/client.server"
import { AddCommentActionSchema } from "~/services/validations/action-schemas.server"
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
