import { PrismaClient } from "@prisma/client"
import pProps from "p-props"
import getPosts from "./seed-data/interactions"
import { uploadToS3 } from "./seed-data/interactions/upload"

const db = new PrismaClient()

const CDNLink = "https://dtom6jzmogd06.cloudfront.net/"

async function seed() {
  const postsData = getPosts()
  await Promise.all(
    postsData.map(async post => {
      const { title, slug, media, Source, CreatedBy } = post

      const uploadedMedia = await pProps({
        video: uploadToS3(media?.video),
        preview: uploadToS3(media?.preview),
      })
      return db.post.create({
        data: {
          title,
          slug,
          Source,
          CreatedBy,
          videoUrl: CDNLink + uploadedMedia.video.key,
          previewUrl: CDNLink + uploadedMedia.preview.key,
        },
      })
    }),
  )
}

seed()
