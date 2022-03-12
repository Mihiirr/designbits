import { Client } from "@notionhq/client"
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints"
const SourcesDatabaseID = process.env.NOTION_SOURCES_DATABASE_ID || ""
const PostsDatabaseID = process.env.NOTION_POSTS_DATABASE_ID || ""

const notion = new Client({
  auth: process.env.NOTION_API_SECRET,
})

export type ParsedSourceItem = {
  createdAt: string
  updatedAt: string
  name: string
  url: string
  imageSrc: {
    file: {
      url: string
      expiry_time: string
    }
    name: string
    type?: "file" | undefined
  }
  notionSourceId: string
}

export type ParsedPostItem = {
  createdAt: string
  updatedAt: string
  title: string
  sourceName: string
  description: string
  media: {
    file: {
      url: string
      expiry_time: string
    }
    name: string
    type?: "file" | undefined
  }
  createdBy: string
  notionSourceId: string
}

export async function fetchSourcesData() {
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: SourcesDatabaseID,
  })

  let processedData = response.results.reduce((acc, page) => {
    if ("properties" in page) {
      const imageObj =
        page.properties?.imageSrc?.type === "files" &&
        page.properties.imageSrc?.files?.[0]?.type === "file"
          ? page.properties.imageSrc?.files?.[0]
          : null

      const parsedData = {
        createdAt: page.created_time,
        updatedAt: page.last_edited_time,
        name:
          page.properties?.Name?.type === "title"
            ? page.properties.Name?.title?.[0].plain_text
            : null,
        url:
          page.properties?.url?.type === "url"
            ? page.properties.url?.url
            : null,
        imageSrc: imageObj,
        notionSourceId: page.id,
      }

      if (parsedData.name && parsedData.url && parsedData.imageSrc !== null) {
        acc.push({
          createdAt: parsedData.createdAt,
          updatedAt: parsedData.updatedAt,
          name: parsedData.name,
          url: parsedData.url,
          imageSrc: parsedData.imageSrc,
          notionSourceId: parsedData.notionSourceId,
        })
      } else {
        console.log("===== INVALID SOURCE =====", { parsedData })
      }
    } else {
      console.log("===== INVALID SOURCE =====", " properties not found in ", {
        page,
      })
    }
    return acc
  }, [] as ParsedSourceItem[])

  return processedData
}

export async function fetchPostsData() {
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: PostsDatabaseID,
  })

  const processedData = response.results.reduce((acc, page) => {
    if ("properties" in page) {
      const parsedData = {
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
            ? page.properties.Description?.rich_text?.[0]?.plain_text
            : null,
        media:
          page.properties.Media?.type === "files" &&
          page.properties.Media?.files?.[0]?.type === "file"
            ? page.properties.Media?.files?.[0]
            : null,
        createdBy: page.created_by.id,
        sourceName:
          page.properties?.SourceName?.type === "rollup" &&
          page.properties?.SourceName.rollup.type === "array" &&
          page.properties?.SourceName.rollup.array?.[0]?.type === "title"
            ? page.properties?.SourceName.rollup.array?.[0]?.title[0]
                ?.plain_text
            : null,
        notionSourceId: page.id,
      }

      console.log(parsedData)

      if (
        parsedData.description &&
        parsedData.media &&
        parsedData.sourceName &&
        parsedData.title
      ) {
        acc.push({
          createdAt: parsedData.createdAt,
          createdBy: parsedData.createdBy,
          description: parsedData.description,
          media: parsedData.media,
          sourceName: parsedData.sourceName,
          title: parsedData.title,
          updatedAt: parsedData.updatedAt,
          notionSourceId: parsedData.notionSourceId,
        })
      }
    }
    return acc
  }, [] as ParsedPostItem[])

  return processedData
}
