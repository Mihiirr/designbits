import { z } from "zod"

export const LoginSchema = z.object({
  email: z.string().email().max(256),
  redirectTo: z.string().nullable().optional(),
})

export const LikeActionSchema = z.object({
  postId: z.string(),
  userId: z.string(),
})
