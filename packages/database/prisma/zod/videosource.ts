import * as z from "zod"
import type { VideoSource } from "../../../../node_modules/.prisma/client"
import { CompletePost, RelatedPostModel } from "./index"

export const VideoSourceModel = z.object({
  id: z.string(),
  postId: z.string(),
  type: z.string(),
  url: z.string(),
})

export interface CompleteVideoSource extends VideoSource {
  Post: CompletePost
}

/**
 * RelatedVideoSourceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedVideoSourceModel: z.ZodSchema<CompleteVideoSource> = z.lazy(() => VideoSourceModel.extend({
  Post: RelatedPostModel,
}))
