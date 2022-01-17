import * as z from "zod"
import type { Follower } from "@prisma/client"
import { CompleteUser, RelatedUserModel } from "./index"

export const FollowerModel = z.object({
  id: z.string(),
  followedById: z.string(),
  followerId: z.string(),
})

export interface CompleteFollower extends Follower {
  Followed: CompleteUser
  Follower: CompleteUser
}

/**
 * RelatedFollowerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedFollowerModel: z.ZodSchema<CompleteFollower> = z.lazy(() =>
  FollowerModel.extend({
    Followed: RelatedUserModel,
    Follower: RelatedUserModel,
  }),
)
