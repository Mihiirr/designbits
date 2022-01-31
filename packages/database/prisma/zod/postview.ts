import * as z from "zod"
import type { PostView } from "../../dist/prisma"
import { CompleteUser, RelatedUserModel } from "./index"

export const PostViewModel = z.object({
  id: z.string(),
  viewedBy: z.string(),
  viewedAt: z.date(),
})

export interface CompletePostView extends PostView {
  ViewedBy: CompleteUser
}

/**
 * RelatedPostViewModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPostViewModel: z.ZodSchema<CompletePostView> = z.lazy(() => PostViewModel.extend({
  ViewedBy: RelatedUserModel,
}))
