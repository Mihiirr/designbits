import { z } from "zod"
import { LoginSchema } from "~/services/validations/action-schemas.server"

export type LoginFields = z.infer<typeof LoginSchema>
