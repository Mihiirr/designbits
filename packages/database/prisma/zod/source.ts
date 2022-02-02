import * as z from "zod"
import type { Source } from "../../../../node_modules/.prisma/client"
import { CompletePost, RelatedPostModel } from "./index"

export const SourceModel = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string(),
  imageSrc: z.string(),
})

export interface CompleteSource extends Source {
  Post: CompletePost[]
}

/**
 * RelatedSourceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSourceModel: z.ZodSchema<CompleteSource> = z.lazy(() => SourceModel.extend({
  Post: RelatedPostModel.array(),
}))
