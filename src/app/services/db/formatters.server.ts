import {
  Post,
  PostReaction,
  Prisma,
  TAG_COLORS,
  User,
  VideoSize,
  VideoSource,
} from "@prisma/client"
import groupBy from "lodash.groupby"
import property from "lodash.property"
import {
  FormattedSingleInteractionsPostData,
  FormattedSourceElementProps,
  SingleInteractionPostData,
  SourceWithFormattedLogos,
  SourceWithLogos,
} from "~/types/formatters"
import { ASSETS_CDN_LINK } from "~/utils/constants"

const sourcePriority = ["video/webm", "video/mp4"]
const qualityPriority: VideoSize[] = [
  VideoSize.HIGH_RES_1080P,
  VideoSize.LARGE_720P,
  VideoSize.MEDIUM_480P,
  VideoSize.SMALL_360P,
  VideoSize.THUMBNAIL_240P,
]

function processGroupedByResult<T extends Record<string | number, unknown>>(
  xs: Array<T>,
  key: string | number,
  propertyAccessor: (x: T) => unknown,
) {
  return xs.reduce(function (rv, x) {
    rv[x[key] as string | number] = propertyAccessor(x)
    return rv
  }, {} as Record<string | number, unknown>)
}

type RawTotalReactionsOnPost = Prisma.PickArray<
  Prisma.PostReactionGroupByOutputType,
  "postId"[]
> & {
  _count: {
    id: number
  }
}

type RawInteractionsPostData = {
  postsWithCurrentUserReactionData: (Post & {
    Source: SourceWithLogos
    CreatedBy: User
    PostReactions?: PostReaction[]
    VideoSources: VideoSource[]
  })[]
  totalReactionsOnPost: RawTotalReactionsOnPost[]
}

type Copy<T> = { [K in keyof T]: T[K] }

function formatTotalReactionsData(
  totalReactionsOnPost: RawTotalReactionsOnPost[],
) {
  const reactionsCountByPostId = processGroupedByResult<
    Copy<RawTotalReactionsOnPost>
  >(totalReactionsOnPost, "postId", property("_count.id")) as Record<
    string | number,
    number
  >
  return reactionsCountByPostId
}

export type FormattedInteractionsPostData = {
  reactionsCount: number
  reactedByLoggedInUser: boolean
  id: string
  title: string
  slug: string
  createdById: string
  createdAt: Date
  modifiedAt: Date
  sourceId: string
  previewUrl: string
  description: string
  Source: SourceWithFormattedLogos
  VideoSources: VideoSource[]
  CreatedBy: User
}

function formatInteractionPostsData(
  data: RawInteractionsPostData,
): FormattedInteractionsPostData[] {
  const { postsWithCurrentUserReactionData, totalReactionsOnPost } = data

  const reactionsCountByPostId = formatTotalReactionsData(totalReactionsOnPost)
  return postsWithCurrentUserReactionData.map(interactionPost => {
    const { PostReactions, Source, VideoSources, ...rest } = interactionPost
    return {
      ...rest,
      VideoSources: VideoSources.sort(videoSourcesSorter),
      Source: formatSourceLogos(Source),
      reactionsCount: reactionsCountByPostId?.[interactionPost.id],
      reactedByLoggedInUser: PostReactions?.length ? true : false,
    }
  })
}

function videoSourcesSorter(a: VideoSource, b: VideoSource) {
  if (a.type === b.type) {
    return qualityPriority.indexOf(a.size) - qualityPriority.indexOf(b.size)
  }
  return sourcePriority.indexOf(a.type) - sourcePriority.indexOf(b.type)
}

const imageSourcePriority = [
  "image/avif",
  "image/webp",
  "image/png",
  "image/jpg",
]

function formatSourceLogos({ SourceLogos, ...rest }: SourceWithLogos) {
  const sourcesGroupedByType = groupBy(SourceLogos, "type")

  const acc = Object.entries(sourcesGroupedByType).reduce(
    (acc, [type, sources]) => {
      acc[type] = {
        srcSet: sources
          .map(source =>
            [
              ASSETS_CDN_LINK + source.url,
              source.size !== null ? source.size : "1x",
            ].join(" "),
          )
          .join(", "),
        type,
      }
      return acc
    },
    {} as { [key: string]: FormattedSourceElementProps },
  )

  const formattedLogos = Object.entries(acc).sort(
    ([a], [b]) =>
      imageSourcePriority.indexOf(a) - imageSourcePriority.indexOf(b),
  ) as [string, FormattedSourceElementProps][]

  const defaultSizePNGImage = sourcesGroupedByType["image/png"]?.find(
    x => x.size === null,
  )

  const fallBackImage = defaultSizePNGImage
    ? defaultSizePNGImage
    : sourcesGroupedByType["image/png"]?.[0]

  return { formattedLogos, fallBackImage, ...rest }
}

const tagsToClassnameMap: {
  [key in TAG_COLORS]: string
} = {
  [TAG_COLORS.BLUE]: "bg-indigo-200 text-indigo-700",
  [TAG_COLORS.BROWN]: "bg-green-200 text-green-700",
  [TAG_COLORS.GREEN]: "bg-emerald-200 text-emerald-700",
  [TAG_COLORS.ORANGE]: "bg-orange-200 text-orange-700",
  [TAG_COLORS.PINK]: "bg-pink-200 text-pink-700",
  [TAG_COLORS.PURPLE]: "bg-purple-200 text-purple-700",
  [TAG_COLORS.RED]: "bg-red-200 text-red-700",
  [TAG_COLORS.GRAY]: "bg-stone-200 text-stone-700",
  [TAG_COLORS.YELLOW]: "bg-yellow-200 text-yellow-700",
  [TAG_COLORS.LIGHT_GRAY]: "bg-slate-200 text-slate-700",
}

function formatSingleInteractionPostData(
  data: NonNullable<SingleInteractionPostData>,
) {
  const {
    _count: { PostReactions: reactionCount },
    VideoSources,
    PostReactions,
    Source,
    Tags,
    ...rest
  } = data
  return {
    ...rest,
    reactionCount,
    Source: formatSourceLogos(Source),
    tags: Tags.map(tag => ({
      ...tag,
      classname: tagsToClassnameMap[tag.color],
    })),
    VideoSources: VideoSources.sort(videoSourcesSorter),
    reactedByLoggedInUser: PostReactions?.length ? true : false,
  }
}

export { formatInteractionPostsData, formatSingleInteractionPostData }
