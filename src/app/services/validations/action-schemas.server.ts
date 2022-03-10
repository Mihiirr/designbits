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

export const AddCommentActionSchema = z.object({
  postId: z.string().refine(async postId => {
    const post = await db.post.findUnique({
      where: {
        id: postId,
      },
    })
    if (!post) {
      return false
    }
    return true
  }),
  userId: z.string(),
  comment: z.string(),
})
