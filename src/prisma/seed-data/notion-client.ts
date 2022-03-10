import { Client } from "@notionhq/client"
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints"
import invariant from "tiny-invariant"
import { createWriteStream } from "fs"
import { pipeline } from "stream"
import { promisify } from "util"
import fetch from "node-fetch"
import pProps from "p-props"
import { uploadToS3 } from "./upload"
import * as path from "path"
import * as fs from "fs"
import { db } from "../../app/services/db/client.server"
import pMap from "p-map"
import processImage, { AllowedFormat, SizeName } from "./optimize-images"
import { S3 } from "aws-sdk"

function removeNullAndUndefined(obj: { [s: string]: unknown }) {
  return Object.entries(obj).reduce((previousValue, [key, value]) => {
    if (value !== null && value !== undefined) {
      previousValue[key] = value
    }
    return previousValue
  }, {} as { [s: string]: unknown })
}

type DownloadFnProps = {
  fileName: string
  url: string
  filePath: string
}

const download = async ({ url, filePath, fileName }: DownloadFnProps) => {
  const streamPipeline = promisify(pipeline)

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`unexpected response ${response.statusText}`)
  }

  const dir = path.join(__dirname, filePath)

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }

  await streamPipeline(
    response.body,
    createWriteStream(path.join(dir, fileName)),
  )

  const processedImages = await processImage(path.join(dir, fileName))

  return pMap(processedImages, async ({ fullFileName, format, sizeName }) => {
    return pProps({
      uploadedData: uploadToS3(fullFileName, "source-images/processed"),
      format,
      sizeName,
    })
  })

  // const data = await uploadToS3(fileName, processedImage)

  // return data
}

const notion = new Client({
  auth: process.env.NOTION_API_SECRET,
})

const PostsDatabaseID = process.env.NOTION_POSTS_DATABASE_ID || ""
const SourcesDatabaseID = process.env.NOTION_SOURCES_DATABASE_ID || ""

type SourcesParsedData = {
  createdAt: string
  updatedAt: string
  title: string | null
  url: string | null
  imageSrc: string | undefined
}[]

export async function seedSourcesData() {
  try {
    const response: QueryDatabaseResponse = await notion.databases.query({
      database_id: SourcesDatabaseID,
    })

    const imagesToDownload: { [x: string]: string } = {}

    let processedData: SourcesParsedData = response.results.map(page => {
      invariant("properties" in page, "notion-page-type-assertion-failed")

      const imageObj =
        page.properties?.imageSrc?.type === "files" &&
        page.properties.imageSrc?.files?.[0]?.type === "file"
          ? page.properties.imageSrc?.files?.[0]
          : null

      if (imageObj !== null) {
        imagesToDownload[imageObj.name] = imageObj.file.url
      }

      return {
        createdAt: page.created_time,
        updatedAt: page.last_edited_time,
        title:
          page.properties?.Name?.type === "title"
            ? page.properties.Name?.title?.[0].plain_text
            : null,
        url:
          page.properties?.url?.type === "url"
            ? page.properties.url?.url
            : null,
        imageSrc: imageObj?.name,
      }
    })

    const downloader: {
      [x: string]: Promise<
        {
          uploadedData: S3.ManagedUpload.SendData | { Key: string }
          format: AllowedFormat
          sizeName: SizeName
        }[]
      >
    } = {}
    Object.entries(imagesToDownload).reduce(
      (previousValue, [name, imageUrl]) => {
        previousValue[name] = download({
          url: imageUrl,
          filePath: "source-images",
          fileName: name,
        }) as Promise<
          {
            uploadedData: S3.ManagedUpload.SendData | { Key: string }
            format: AllowedFormat
            sizeName: SizeName
          }[]
        >
        return previousValue
      },
      downloader,
    )

    const downloadedImages = await pProps(downloader)
    console.log(downloadedImages)

    const sources = await pMap(processedData, async source => {
      return db.source.upsert({
        select: {
          id: true,
          name: true,
        },
        create: {
          name: source.title!,
          url: source.url!,
        },
        update: removeNullAndUndefined({
          name: source.title,
          url: source.url,
        }),
        where: {
          name: source.title!,
        },
      })
    })

    const sourcesGroupedByName = sources.reduce((previousValue, source) => {
      previousValue[source.name] = source
      return previousValue
    }, {} as any)
    console.log({ sources })

    const sourceLogos: {
      [x: string]: {
        uploadedData:
          | S3.ManagedUpload.SendData
          | {
              Key: string
            }
        format: AllowedFormat
        sizeName: SizeName
      }[]
    } = {}

    processedData.reduce((previousValue, source) => {
      if (source.title && source.imageSrc) {
        previousValue[source.title] = downloadedImages[source.imageSrc]
      }
      return previousValue
    }, sourceLogos)

    return pMap(Object.entries(sourceLogos), async ([sourceName, images]) => {
      return db.sourceLogo.createMany({
        data: images.map(image => ({
          sourceId: sourcesGroupedByName[sourceName].id,
          type: `image/${image.format}`,
          url: image.uploadedData.Key,
          size: image.sizeName !== "default" ? image.sizeName : null,
        })),
      })
    })
  } catch (error) {
    console.error(error)
  }
}

async function fetchPostsData() {
  try {
    const response: QueryDatabaseResponse = await notion.databases.query({
      database_id: PostsDatabaseID,
    })

    const processedData = response.results.map(page => {
      invariant("properties" in page, "notion-page-type-assertion-failed")

      return {
        createdAt: page.created_time,
        updatedAt: page.last_edited_time,
        title:
          page.properties.Title.type === "title"
            ? page.properties.Title?.title?.[0].plain_text
            : null,
        source:
          page.properties.Source?.type === "relation"
            ? page.properties.Source?.relation?.[0]?.id
            : null,
        description:
          page.properties.Description?.type === "rich_text" &&
          page.properties.Description?.rich_text?.[0]?.type === "text"
            ? page.properties.Description?.rich_text?.[0]?.text
            : null,
        createdBy: page.created_by.id,
      }
    })
    console.log(JSON.stringify(processedData, null, 2))
    console.log(JSON.stringify(response, null, 2))
    return processedData
  } catch (error) {
    console.error(error)
  }
}
