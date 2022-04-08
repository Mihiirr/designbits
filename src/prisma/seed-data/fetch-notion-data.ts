import { Client } from "@notionhq/client"
import {
  GetDatabaseResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints"
import { Device, Platfrom, TAG_COLORS } from "@prisma/client"
import { AsyncReturnType } from "type-fest"
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
          page.properties?.Name?.type === "title" &&
          page.properties.Name?.title?.[0]
            ? page.properties.Name?.title?.[0]?.plain_text
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

export type ParsedPostItem = AsyncReturnType<typeof fetchPostsData>[0]
function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined
}

export async function fetchPostsData() {
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: PostsDatabaseID,
  })

  const processedData = response.results.map(page => {
    if ("properties" in page) {
      const parsedData = {
        createdAt: page.created_time,
        updatedAt: page.last_edited_time,
        title:
          page.properties.Title.type === "title"
            ? page.properties.Title?.title?.[0]?.plain_text
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
        tags:
          page.properties?.Tags?.type === "multi_select"
            ? page.properties?.Tags?.multi_select
            : null,
        platform:
          page.properties?.Platform?.type === "select"
            ? page.properties?.Platform?.select?.name
            : null,
        industries:
          page.properties?.Industries?.type === "multi_select"
            ? page.properties?.Industries?.multi_select
            : null,
        device:
          page.properties?.Device?.type === "select"
            ? page.properties?.Device?.select?.name
            : null,
      }
      const platformName = validPlatformName(parsedData.platform)
      const deviceName = validDeviceName(parsedData.device)

      if (
        parsedData.description &&
        parsedData.media &&
        parsedData.sourceName &&
        parsedData.title &&
        platformName !== undefined &&
        deviceName !== undefined
      ) {
        return {
          createdAt: parsedData.createdAt,
          createdBy: parsedData.createdBy,
          description: parsedData.description,
          media: parsedData.media,
          sourceName: parsedData.sourceName,
          title: parsedData.title,
          updatedAt: parsedData.updatedAt,
          notionSourceId: parsedData.notionSourceId,
          tags: parsedData.tags,
          platform: platformName,
          industries: parsedData.industries,
          device: deviceName,
        }
      }
      return null
    }
    return null
  })

  return processedData.filter(notEmpty)
}

type SelectColor = NonNullable<ParsedPostItem["tags"]>[0]["color"]
const colorsMap: {
  [notionColorName in SelectColor]: TAG_COLORS
} = {
  default: TAG_COLORS.BLUE,
  gray: TAG_COLORS.GRAY,
  brown: TAG_COLORS.BROWN,
  orange: TAG_COLORS.ORANGE,
  yellow: TAG_COLORS.YELLOW,
  green: TAG_COLORS.GREEN,
  blue: TAG_COLORS.BLUE,
  purple: TAG_COLORS.PURPLE,
  pink: TAG_COLORS.PINK,
  red: TAG_COLORS.RED,
}

const validPlatformName = (
  platform: string | null | undefined,
): Platfrom | undefined => {
  switch (platform?.toLowerCase()) {
    case "web":
      return Platfrom.WEB
    case "ios":
      return Platfrom.IOS
    case "android":
      return Platfrom.ANDROID
  }
}

const validDeviceName = (
  device: string | null | undefined,
): Device | undefined => {
  switch (device?.toLowerCase()) {
    case "desktop":
      return Device.DESKTOP
    case "tablet":
      return Device.TABLET
    case "mobile":
      return Device.MOBILE
  }
}

export async function fetchDatabaseObject() {
  const response: GetDatabaseResponse = await notion.databases.retrieve({
    database_id: PostsDatabaseID,
  })
  const tagsData =
    response.properties.Tags.type === "multi_select"
      ? response.properties.Tags.multi_select.options.map(option => ({
          name: option.name,
          color: colorsMap[option.color || "default"] || TAG_COLORS.BLUE,
          notionTagId: option.id,
        }))
      : null

  const industriesData =
    response.properties.Industries.type === "multi_select"
      ? response.properties.Industries.multi_select.options.map(option => ({
          name: option.name,
          color: colorsMap[option.color || "default"] || TAG_COLORS.BLUE,
          notionTagId: option.id,
        }))
      : null

  return { tagsData, industriesData }
}
