import pProps from "p-props"
import { db } from "../../app/services/db/client.server"
import pMap from "p-map"
import { AllowedFormat, SizeName } from "./optimize-images"
import { S3 } from "aws-sdk"
import slug from "slug"
import {
  downloadImagesAndUploadToS3,
  downloadVideosAndUploadToS3,
  findPostsToCreateAndUpdate,
  findSourcesToCreateAndUpdate,
  removeNullAndUndefined,
} from "./seed-helpers"
import {
  fetchDatabaseObject,
  fetchPostsData,
  fetchSourcesData,
} from "./fetch-notion-data"
import { usersData } from "./interactions"
import * as path from "path"
import { Post, VideoSize, VideoSource } from "@prisma/client"
import { outputConfigs } from "./process-video"

export type DownloadImagesFnResponse = {
  uploadedData:
    | S3.ManagedUpload.SendData
    | {
        Key: string
      }
  format: AllowedFormat
  sizeName: SizeName
}
export type DownloadVideoFnResponse = {
  uploadedData:
    | S3.ManagedUpload.SendData
    | {
        Key: string
      }
  fileName: string
  format: string
  sizeName: VideoSize
}

export async function seedSourcesData() {
  try {
    let processedData = await fetchSourcesData()

    const { sourcesToCreate, sourcesToUpdate } =
      await findSourcesToCreateAndUpdate(processedData)

    if (sourcesToCreate.length === 0 && sourcesToUpdate.length === 0) {
      console.log(" ======= No sources to create or update ======== ")
      return
    }

    const createdSources = await pMap(sourcesToCreate, async source => {
      return db.source.create({
        data: {
          name: source.name,
          url: source.url,
          updatedAt: source.updatedAt,
          notionSourceId: source.notionSourceId,
        },
      })
    })

    const updatedSources = await pMap(sourcesToUpdate, async source => {
      return db.source.update({
        select: {
          id: true,
          name: true,
          notionSourceId: true,
          url: true,
          updatedAt: true,
        },
        data: removeNullAndUndefined({
          name: source.name,
          url: source.url,
          updatedAt: source.updatedAt,
          notionSourceId: source.notionSourceId,
        }),
        where: {
          id: source.id,
        },
      })
    })

    const imagesToDownload: {
      [x: string]: Promise<DownloadImagesFnResponse[]>
    } = {}

    const sources = sourcesToCreate.concat(sourcesToUpdate)

    const sourcesGroupedByNotionSourceID = sources.reduce(
      (previousValue, source) => {
        previousValue[source.notionSourceId] = source
        return previousValue
      },
      {} as any,
    )

    const createdAndUpdatedSources = createdSources.concat(updatedSources)

    createdAndUpdatedSources.forEach(source => {
      const notionPageItem =
        sourcesGroupedByNotionSourceID[source.notionSourceId!]
      if (notionPageItem.imageSrc?.file?.url) {
        imagesToDownload[notionPageItem.notionSourceId] =
          downloadImagesAndUploadToS3({
            url: notionPageItem.imageSrc?.file?.url,
            filePath: "source-images",
            fileName: source.id,
            uploadMetaData: {
              sourceId: source.id,
              sourecName: source.name,
              notionSourceId: notionPageItem.notionSourceId,
            },
          }) as Promise<DownloadImagesFnResponse[]>
      }
    })

    const downloadedImages = await pProps(imagesToDownload)

    const sourceLogosToCreate = createdAndUpdatedSources.map(source => {
      return {
        images: downloadedImages[source.notionSourceId!],
        id: source.id,
      }
    })

    return pMap(sourceLogosToCreate, async ({ images, id }) => {
      return pMap(images, async image => {
        return db.sourceLogo.upsert({
          create: {
            sourceId: id,
            type: `image/${image.format}`,
            url: image.uploadedData.Key,
            size: image.sizeName,
          },
          update: {
            url: image.uploadedData.Key,
          },
          where: {
            sourceId_type_size: {
              sourceId: id,
              type: `image/${image.format}`,
              size: image.sizeName,
            },
          },
        })
      })
    })
  } catch (error) {
    console.error(error)
  }
}

export async function seedPostsData() {
  try {
    let processedData = await fetchPostsData()

    // const alreadyExistingPosts = await db.post.findMany({
    //   where: {
    //     notionSourceId: {
    //       in: processedData.map(post => post.notionSourceId),
    //     },
    //   },
    // })

    // const existingPostsById = alreadyExistingPosts.reduce(
    //   (previousValue, post) => {
    //     if (post.notionSourceId) {
    //       previousValue[post.notionSourceId] = post
    //     }
    //     return previousValue
    //   },
    //   {} as any,
    // )

    // const postsToCreate = processedData.filter(post => {
    //   return existingPostsById[post.notionSourceId] === undefined
    // })

    const { postsToCreate, postsToUpdate } = await findPostsToCreateAndUpdate(
      processedData,
    )

    const insertedPosts = await pMap(
      postsToCreate,
      async post => {
        try {
          const data = await db.post.create({
            data: {
              description: post.description,
              previewUrl: "",
              slug: slug(post.title),
              title: post.title,
              Source: {
                connect: {
                  name: post.sourceName,
                },
              },
              Tags: {
                connect: post.tags?.map(tag => {
                  return {
                    notionTagId: tag.id,
                  }
                }),
              },
              CreatedBy: usersData.Shreyas,
              notionSourceId: post.notionSourceId,
            },
          })
          console.log("inserted post", data.title)
        } catch (error) {
          console.log("error in inserting post ", post, error)
        }
      },
      {
        concurrency: 1,
      },
    )

    const updatedPosts = await pMap(postsToUpdate, async post => {
      return db.post.update({
        data: {
          description: post.description,
          // CreatedBy: {
          //   connectOrCreate: {
          //     where: {
          //       id: post.createdBy.id,
          //     },
          //   },
          // },
          Tags: {
            connect: post.tags?.map(tag => {
              return {
                notionTagId: tag.id,
              }
            }),
          },
          notionSourceId: post.notionSourceId,
          updatedAt: post.updatedAt,
          slug: slug(post.title),
          title: post.title,
        },
        where: {
          id: post.id,
        },
      })
    })

    const allPostsAfterUpsert = await db.post.findMany({
      where: {
        notionSourceId: {
          in: processedData.map(post => post.notionSourceId),
        },
      },
      include: {
        VideoSources: true,
      },
    })

    const postsByNotionPageId = allPostsAfterUpsert.reduce(
      (previousValue, post) => {
        if (post.notionSourceId !== null) {
          previousValue[post.notionSourceId] = post
        }
        return previousValue
      },
      {} as {
        [x: string]: Post & {
          VideoSources: VideoSource[]
        }
      },
    )

    const mediaFilesToDownload: {
      [x: string]: Promise<DownloadVideoFnResponse[]>
    } = {}

    processedData.forEach(post => {
      const postItem = postsByNotionPageId[post.notionSourceId]
      const videoSources = postItem.VideoSources

      const map = {} as any

      videoSources.forEach(videoSource => {
        const key = [videoSource.type, videoSource.size].join("-")
        map[key] = true
      })

      const formatsToGenerate = outputConfigs.filter(outputConfig => {
        const key = [`video/${outputConfig.ext}`, outputConfig.sizeName].join(
          "-",
        )
        console.log(key, "======")
        return map[key] !== true
      })

      console.log(
        "generating formats:" +
          JSON.stringify(
            formatsToGenerate.map(format => `${format.ext}-${format.size}`),
          ),
      )
      console.log({
        videoSource: videoSources.length,
        map,
        postItem: postItem.title,
        formatsToGenerate: formatsToGenerate.length,
      })

      if (post.media?.file?.url && formatsToGenerate.length > 0) {
        mediaFilesToDownload[post.notionSourceId] = downloadVideosAndUploadToS3(
          {
            url: post.media?.file?.url,
            filePath: "interactions",
            fileName: postItem.id + path.extname(post.media?.name),
            uploadMetaData: {
              postId: postItem.id,
              postTitle: postItem.title,
              notionPageId: postItem.notionSourceId || "",
            },
          },
        ) as Promise<DownloadVideoFnResponse[]>
      }
    })

    const downloadedMediaFiles = await pProps(mediaFilesToDownload)

    await pMap(
      Object.entries(downloadedMediaFiles).map(
        async ([notionSourceId, files]) => {
          const postItem = postsByNotionPageId[notionSourceId]
          return pMap(
            files,
            async file => {
              return db.videoSource.upsert({
                create: {
                  postId: postItem.id,
                  type: `video/${file.format}`,
                  url: file.uploadedData.Key,
                  size: file.sizeName,
                },
                update: {
                  url: file.uploadedData.Key,
                },
                where: {
                  postId_type_size: {
                    postId: postItem.id,
                    type: `video/${file.format}`,
                    size: file.sizeName,
                  },
                },
              })
            },
            { concurrency: 2 },
          )
        },
      ),
      () => {},
      { concurrency: 2 },
    )

    // console.log(processedData)

    // const { sourcesToCreate, sourcesToUpdate } =
    //   await findSourcesToCreateAndUpdate(processedData)

    // if (sourcesToCreate.length === 0 && sourcesToUpdate.length === 0) {
    //   console.log(" ======= No sources to create or update ======== ")
    //   return
    // }

    // const createdSources = await pMap(sourcesToCreate, async source => {
    //   return db.source.create({
    //     data: {
    //       name: source.name,
    //       url: source.url,
    //       updatedAt: source.updatedAt,
    //       notionSourceId: source.notionSourceId,
    //     },
    //   })
    // })

    // const updatedSources = await pMap(sourcesToUpdate, async source => {
    //   return db.source.update({
    //     select: {
    //       id: true,
    //       name: true,
    //       notionSourceId: true,
    //       url: true,
    //       updatedAt: true,
    //     },
    //     data: removeNullAndUndefined({
    //       name: source.name,
    //       url: source.url,
    //       updatedAt: source.updatedAt,
    //       notionSourceId: source.notionSourceId,
    //     }),
    //     where: {
    //       id: source.id,
    //     },
    //   })
    // })

    // const imagesToDownload: {
    //   [x: string]: Promise<DownloadFnResponse[]>
    // } = {}

    // const sources = sourcesToCreate.concat(sourcesToUpdate)

    // const sourcesGroupedByNotionSourceID = sources.reduce(
    //   (previousValue, source) => {
    //     previousValue[source.notionSourceId] = source
    //     return previousValue
    //   },
    //   {} as any,
    // )

    // const createdAndUpdatedSources = createdSources.concat(updatedSources)

    // createdAndUpdatedSources.forEach(source => {
    //   const notionPageItem =
    //     sourcesGroupedByNotionSourceID[source.notionSourceId!]
    //   if (notionPageItem.imageSrc?.file?.url) {
    //     imagesToDownload[notionPageItem.notionSourceId] =
    //       downloadFromURLAndUploadToS3({
    //         url: notionPageItem.imageSrc?.file?.url,
    //         filePath: "source-images",
    //         fileName: source.id,
    //         uploadMetaData: {
    //           sourceId: source.id,
    //           sourecName: source.name,
    //           notionSourceId: notionPageItem.notionSourceId,
    //         },
    //       }) as Promise<DownloadFnResponse[]>
    //   }
    // })

    // const downloadedImages = await pProps(imagesToDownload)

    // const sourceLogosToCreate = createdAndUpdatedSources.map(source => {
    //   return {
    //     images: downloadedImages[source.notionSourceId!],
    //     id: source.id,
    //   }
    // })

    // return pMap(sourceLogosToCreate, async ({ images, id }) => {
    //   return pMap(images, async image => {
    //     return db.sourceLogo.upsert({
    //       create: {
    //         sourceId: id,
    //         type: `image/${image.format}`,
    //         url: image.uploadedData.Key,
    //         size: image.sizeName,
    //       },
    //       update: {
    //         url: image.uploadedData.Key,
    //       },
    //       where: {
    //         sourceId_type_size: {
    //           sourceId: id,
    //           type: `image/${image.format}`,
    //           size: image.sizeName,
    //         },
    //       },
    //     })
    //   })
    // })
  } catch (error) {
    console.error(error)
  }
}

export async function seedTagsData() {
  const processedData = await fetchDatabaseObject()
  console.log(processedData)

  try {
    if (processedData !== null) {
      return (
        pMap(processedData, async tag => {
          return db.tag.upsert({
            create: {
              name: tag.name,
              color: tag.color,
              notionTagId: tag.notionTagId,
            },
            update: {
              name: tag.name,
              color: tag.color,
            },
            where: {
              notionTagId: tag.notionTagId,
            },
          })
        }),
        {
          concurrency: 2,
        }
      )
    }
  } catch (error) {}
}

// seedSourcesData()
seedPostsData()
// seedTagsData()
