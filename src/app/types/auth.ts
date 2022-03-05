import { z } from "zod"
import { LoginSchema } from "~/services/validations/client-action-schemas"

export type LoginFields = z.infer<typeof LoginSchema>
