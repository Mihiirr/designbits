import * as z from "zod"
import { User, UserStatus, UserRole } from "@prisma/client"
import {
  CompletePost,
  RelatedPostModel,
  CompletePostView,
  RelatedPostViewModel,
  CompletePostReaction,
  RelatedPostReactionModel,
} from "./index"

export const UserModel = z.object({
  id: z.string(),
  email: z.string().email({ message: "Invalid email address" }),
  passwordHash: z.string(),
  name: z.string().nullable(),
  UserStatus: z.nativeEnum(UserStatus),
  role: z.nativeEnum(UserRole),
  createdAt: z.date(),
  modifiedAt: z.date(),
})

export interface CompleteUser extends User {
  Post: CompletePost[]
  PostViews: CompletePostView[]
  ReactedOnPosts: CompletePostReaction[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() =>
  UserModel.extend({
    Post: RelatedPostModel.array(),
    PostViews: RelatedPostViewModel.array(),
    ReactedOnPosts: RelatedPostReactionModel.array(),
  }),
)
