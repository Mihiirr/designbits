import * as z from "zod"
import type { Follower } from "../../dist/prisma"
import { CompleteUser, RelatedUserModel } from "./index"

export const FollowerModel = z.object({
  id: z.string(),
  followedByUserId: z.string(),
  followingUserId: z.string(),
})

export interface CompleteFollower extends Follower {
  FollowingUser: CompleteUser
  Follower: CompleteUser
}

/**
 * RelatedFollowerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedFollowerModel: z.ZodSchema<CompleteFollower> = z.lazy(() => FollowerModel.extend({
  FollowingUser: RelatedUserModel,
  Follower: RelatedUserModel,
}))
