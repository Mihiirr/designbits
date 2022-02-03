import { z } from "zod"
import { LoginSchema } from "~/services/validations/auth-schema.server"

export type LoginFields = z.infer<typeof LoginSchema>
