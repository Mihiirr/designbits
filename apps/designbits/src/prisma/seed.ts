import { PrismaClient } from "@prisma/client"
import pProps from "p-props"
import getPosts from "./seed-data/interactions"
import { uploadToS3 } from "./seed-data/interactions/upload"

const db = new PrismaClient()

async function seed() {
  const postsData = getPosts()
  await Promise.all(
    postsData.map(async post => {
      const { title, slug, media, Source, CreatedBy, description } = post

      const uploadedMedia = await pProps({
        videoMp4: uploadToS3(media?.videoMp4),
        videoWebM: uploadToS3(media?.videoWebM),
        preview: uploadToS3(media?.preview),
      })
      return db.post.create({
        data: {
          title,
          slug,
          Source,
          CreatedBy,
          description,
          VideoSources: {
            createMany: {
              data: [
                {
                  type: "video/mp4",
                  url: uploadedMedia.videoMp4.Key,
                },
                {
                  type: "video/webm",
                  url: uploadedMedia.videoWebM.Key,
                },
              ],
            },
          },
          previewUrl: uploadedMedia.preview.Key,
        },
      })
    }),
  )
}

seed()
