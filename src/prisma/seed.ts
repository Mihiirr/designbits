import { PrismaClient } from "@prisma/client"
import pProps from "p-props"
import getPosts from "./seed-data/interactions"
import { uploadToS3 } from "./seed-data/upload"

const db = new PrismaClient()

async function seed() {
  const postsData = getPosts()
  await Promise.all(
    postsData.map(async post => {
      const { title, slug, media, Source, CreatedBy, description } = post

      const uploadedMedia = await pProps({
        videoMp4: uploadToS3(media?.videoMp4, "interactions"),
        videoWebM: uploadToS3(media?.videoWebM, "interactions"),
        preview: uploadToS3(media?.preview, "interactions"),
        profile: uploadToS3(
          CreatedBy.connectOrCreate.create.profilePicture,
          "profile-pictures",
        ),
      })
      return db.post.create({
        data: {
          title,
          slug,
          Source,
          CreatedBy: {
            connectOrCreate: {
              create: {
                ...CreatedBy.connectOrCreate.create,
                profilePicture: uploadedMedia.profile.Key,
              },
              where: CreatedBy.connectOrCreate.where,
            },
          },
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
