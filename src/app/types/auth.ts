import { z } from "zod"
import { LoginSchema } from "~/services/validations/form-schemas"

export type LoginFields = z.infer<typeof LoginSchema>
