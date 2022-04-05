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
  redirectTo: z.string().nullable().optional(),
})

export const LikeActionSchema = z.object({
  postId: z.string(),
  userId: z.string(),
})

export const CommentLikeActionSchema = z.object({
  commentId: z.string(),
  userId: z.string(),
})

export const FetchCommentRepliesSchema = z.object({
  parentCommentId: z.string(),
  userId: z.string().nullable(),
})

export const AddCommentActionSchema = z.object({
  postId: z.string().refine(async postId => {
    const post = await db.post.findUnique({
      where: {
        id: postId,
      },
    })
    if (post) {
      return true
    }
    return false
  }),
  userId: z.string(),
  comment: z.string(),
  parentCommentId: z.string().nullable().optional(),
})
