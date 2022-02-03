import { z } from "zod"
import { db } from "~/services/db/client.server"

export const SignUpSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .refine(async email => {
      const user = await db.user.findUnique({ where: { email } })
      if (!user) {
        return true
      }
      return false
    }),
  firstName: z
    .string({ required_error: "Name is required" })
    .max(60, { message: "Name is too long" }),
})

export const LoginSchema = z.object({
  email: z.string().email().max(256),
  redirectTo: z.string().nullable(),
})
