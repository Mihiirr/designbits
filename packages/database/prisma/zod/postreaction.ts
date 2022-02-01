import * as z from "zod"
import { PostReaction, PostReactionTypes } from "../generated/output"
import { CompleteUser, RelatedUserModel } from "./index"

export const PostReactionModel = z.object({
  id: z.string(),
  reaction: z.nativeEnum(PostReactionTypes),
  reactedBy: z.string(),
  viewedAt: z.date(),
})

export interface CompletePostReaction extends PostReaction {
  ReactedBy: CompleteUser
}

/**
 * RelatedPostReactionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPostReactionModel: z.ZodSchema<CompletePostReaction> = z.lazy(() => PostReactionModel.extend({
  ReactedBy: RelatedUserModel,
}))
