import { json } from "remix"
import { z, ZodObject, ZodRawShape } from "zod"
import { ParsedFormData } from "~/types/utilities"
import { getErrorMessage } from "./misc"

type ErrorMessage = string
type NoError = null
type FormValue = string | null

async function handleFormSubmission<
  ActionData extends {
    status: "success" | "error"
    fields: { [field: string]: FormValue }
    errors: { [field: string]: ErrorMessage | NoError }
  },
  T extends ZodObject<ZodRawShape>,
>({
  form,
  validationSchema,
  // @ts-expect-error ts(2322) 🤷‍♂️
  actionData = { fields: {}, errors: {} },
  handleFormValues,
}: {
  validationSchema: T
  actionData?: ActionData
  handleFormValues: (formValues: z.infer<T>) => Response | Promise<Response>
} & {
  form: ParsedFormData
}): Promise<Response> {
  try {
    const parsedInputs = await validationSchema.parseAsync(form)
    const response = await handleFormValues(parsedInputs)
    return response
  } catch (error: unknown) {
    console.error(error)
    actionData.errors.generalError = getErrorMessage(error)
    return json(actionData, 500)
  }
}

export { handleFormSubmission }
