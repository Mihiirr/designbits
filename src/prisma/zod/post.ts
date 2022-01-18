import * as z from "zod"
import type { Post } from "@prisma/client"
import {
  CompleteUser,
  RelatedUserModel,
  CompleteSource,
  RelatedSourceModel,
  CompleteVideoSource,
  RelatedVideoSourceModel,
} from "./index"

export const PostModel = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  createdById: z.string(),
  createdAt: z.date(),
  modifiedAt: z.date(),
  sourceId: z.string(),
  previewUrl: z.string(),
  description: z.string(),
})

export interface CompletePost extends Post {
  CreatedBy: CompleteUser
  Source: CompleteSource
  VideoSources: CompleteVideoSource[]
}

/**
 * RelatedPostModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPostModel: z.ZodSchema<CompletePost> = z.lazy(() =>
  PostModel.extend({
    CreatedBy: RelatedUserModel,
    Source: RelatedSourceModel,
    VideoSources: RelatedVideoSourceModel.array(),
  }),
)
