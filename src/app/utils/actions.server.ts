import { z, ZodObject, ZodRawShape } from "zod"
import { ParsedFormData } from "~/types/utilities"
import {
  BadRequestException,
  InternalServerErrorException,
} from "./response-helpers.server"

type ErrorMessage = string
type NoError = null

export interface TypedResponse<T extends ZodObject<ZodRawShape>>
  extends Response {
  ok: boolean
  data: unknown
  errors: { [field in keyof z.infer<T>]: ErrorMessage | NoError } | null
}

async function handleFormSubmission<T extends ZodObject<ZodRawShape>>({
  form,
  validationSchema,
  // @ts-expect-error ts(2322) 🤷‍♂️
  actionData = { fields: {}, errors: {} },
  handleFormValues,
}: {
  validationSchema: T
  actionData?: {
    ok: boolean
    data: unknown
    errors: { [field in keyof z.infer<T>]: ErrorMessage | NoError } | null
  }
  handleFormValues: (formValues: z.infer<T>) => Promise<TypedResponse<T>>
} & {
  form: ParsedFormData
}): Promise<TypedResponse<T>> {
  try {
    const parsedInputs = await validationSchema.parseAsync(form)
    const response = await handleFormValues(parsedInputs)
    return response
  } catch (error: unknown) {
    console.error(error)
    if (error instanceof z.ZodError) {
      console.log(error.issues)
      return BadRequestException({
        data: actionData,
        errors: null,
      })
    }
    return InternalServerErrorException(actionData)
  }
}

export { handleFormSubmission }
