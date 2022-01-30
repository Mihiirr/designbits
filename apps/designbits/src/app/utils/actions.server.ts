import { json } from "remix"
import { z, ZodObject, ZodRawShape } from "zod"
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
  request,
  validationSchema,
  // @ts-expect-error ts(2322) 🤷‍♂️
  actionData = { fields: {}, errors: {} },
  handleFormValues,
}: {
  validationSchema: T
  actionData?: ActionData
  handleFormValues: (formValues: z.infer<T>) => Response | Promise<Response>
} & (
  | {
      form: URLSearchParams
      request?: never
    }
  | {
      form?: never
      request: Request
    }
)): Promise<Response> {
  try {
    if (!form) {
      const requestText = await request!.text()
      form = new URLSearchParams(requestText)
    }

    // collect all values first because validators can reference them
    for (const fieldName of Object.keys(validationSchema.shape)) {
      const formValue = form.get(fieldName)
      // Default the value to empty string so it doesn't have trouble with
      // getNonNull later. This allows us to have a validator that allows
      // for optional values.
      actionData.fields[fieldName] = formValue ?? ""
    }

    await validationSchema.parseAsync(actionData.fields)

    console.log(actionData.fields)
    const response = await handleFormValues(actionData.fields)
    return response
  } catch (error: unknown) {
    console.error(error)
    actionData.errors.generalError = getErrorMessage(error)
    return json(actionData, 500)
  }
}

export { handleFormSubmission }
