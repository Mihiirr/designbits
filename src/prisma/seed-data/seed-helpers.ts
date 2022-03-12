import { createWriteStream } from "fs"
import { pipeline } from "stream"
import { promisify } from "util"
import fetch from "node-fetch"
import pProps from "p-props"
import { uploadToS3 } from "./upload"
import * as path from "path"
import * as fs from "fs"
import pMap from "p-map"
import processImage from "./optimize-images"
import { ParsedPostItem, ParsedSourceItem } from "./fetch-notion-data"
import { db } from "../../app/services/db/client.server"
import { Post, Source } from "@prisma/client"
import isEqual from "lodash.isequal"
import pick from "lodash.pick"
import { isBefore } from "date-fns"
import { S3 } from "aws-sdk"
import { processVideo } from "./process-video"

type DownloadFnProps = {
  fileName: string
  url: string
  filePath: string
  uploadMetaData?: S3.Metadata
}

export const downloadFileFromURL = async ({
  url,
  filePath,
  fileName,
}: DownloadFnProps) => {
  const streamPipeline = promisify(pipeline)

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`unexpected response ${response.statusText}`)
  }

  const outputFilePath = path.join(__dirname, filePath, fileName)

  if (!fs.existsSync(path.dirname(outputFilePath))) {
    fs.mkdirSync(path.dirname(outputFilePath))
  }

  await streamPipeline(response.body, createWriteStream(outputFilePath))

  return outputFilePath
}

export const downloadImagesAndUploadToS3 = async ({
  url,
  filePath,
  fileName,
  uploadMetaData = {},
}: DownloadFnProps) => {
  const outputFilePath = await downloadFileFromURL({ url, filePath, fileName })
  const processedImages = await processImage(outputFilePath)

  return pMap(processedImages, async ({ fullFileName, format, sizeName }) => {
    return pProps({
      uploadedData: uploadToS3(
        fullFileName,
        "source-images/processed",
        uploadMetaData,
      ),
      format,
      sizeName,
    })
  })
}

export const downloadVideosAndUploadToS3 = async ({
  url,
  filePath,
  fileName,
  uploadMetaData = {},
}: DownloadFnProps) => {
  const outputFilePath = await downloadFileFromURL({ url, filePath, fileName })
  // const processedImages = await processImage(outputFilePath)
  console.log(outputFilePath)

  console.log("Downloaded video at: ", outputFilePath)
  console.log("processing video at: ", outputFilePath)
  const processedVideos = await processVideo(outputFilePath)
  console.log("process-complete video at: ", outputFilePath)

  return pMap(processedVideos, async ({ fileName, sizeName, format }) => {
    return pProps({
      uploadedData: uploadToS3(
        path.parse(fileName).base,
        "interactions/processed",
        uploadMetaData,
      ),
      fileName,
      sizeName,
      format,
    })
  })
}

export const removeNullAndUndefined = (obj: { [s: string]: unknown }) => {
  return Object.entries(obj).reduce((previousValue, [key, value]) => {
    if (value !== null && value !== undefined) {
      previousValue[key] = value
    }
    return previousValue
  }, {} as { [s: string]: unknown })
}

export async function findSourcesToCreateAndUpdate(
  processedData: ParsedSourceItem[],
) {
  const notionPageIDs = processedData.map(x => x.notionSourceId)
  const foundSources = await db.source.findMany({
    select: {
      id: true,
      name: true,
      notionSourceId: true,
      url: true,
      updatedAt: true,
    },
    where: {
      notionSourceId: {
        in: notionPageIDs,
      },
    },
  })

  const foundSourcesGroupedById = foundSources.reduce(
    (previousValue, source) => {
      if (source.notionSourceId) {
        previousValue[source.notionSourceId] = source
      }
      return previousValue
    },
    {} as { [x: string]: Source },
  )

  const sourcesToCreate: ParsedSourceItem[] = []
  const sourcesToUpdate: (ParsedSourceItem & { id: Source["id"] })[] = []

  processedData.forEach(notionPageItem => {
    const foundSource = foundSourcesGroupedById[
      notionPageItem.notionSourceId
    ] as Source
    if (!foundSource) {
      // TODO Create the source
      sourcesToCreate.push(notionPageItem)
    } else {
      // TODO Update the source
      const keysToCompare = ["name", "url"]
      if (
        !isEqual(
          pick(foundSource, keysToCompare),
          pick(notionPageItem, keysToCompare),
        ) ||
        isBefore(
          foundSource.updatedAt ? new Date(foundSource.updatedAt) : new Date(),
          new Date(notionPageItem.updatedAt),
        )
      ) {
        sourcesToUpdate.push({
          ...notionPageItem,
          id: foundSource.id,
        })
      }
    }
  })

  return {
    sourcesToCreate,
    sourcesToUpdate,
  }
}

export async function findPostsToCreateAndUpdate(
  processedData: ParsedPostItem[],
) {
  // const notionPageIDs = processedData.map(x => x.notionSourceId)
  const foundPosts = await db.post.findMany({
    where: {
      notionSourceId: {
        in: processedData.map(post => post.notionSourceId),
      },
    },
  })

  const foundPostsByNotionPageId = foundPosts.reduce(
    (previousValue, source) => {
      if (source.notionSourceId) {
        previousValue[source.notionSourceId] = source
      }
      return previousValue
    },
    {} as { [x: string]: Post },
  )

  const postsToCreate: ParsedPostItem[] = []
  const postsToUpdate: (ParsedPostItem & { id: Post["id"] })[] = []

  processedData.forEach(notionPageItem => {
    const foundPost = foundPostsByNotionPageId[notionPageItem.notionSourceId]
    if (!foundPost) {
      // TODO Create the source
      postsToCreate.push(notionPageItem)
    } else {
      // TODO Update the source
      const keysToCompare: (keyof ParsedPostItem)[] = ["title", "description"]
      if (
        !isEqual(
          pick(foundPost, keysToCompare),
          pick(notionPageItem, keysToCompare),
        ) ||
        isBefore(
          foundPost.updatedAt ? new Date(foundPost.updatedAt) : new Date(),
          new Date(notionPageItem.updatedAt),
        )
      ) {
        postsToUpdate.push({
          ...notionPageItem,
          id: foundPost.id,
        })
      }
    }
  })

  return {
    postsToCreate,
    postsToUpdate,
  }
}
