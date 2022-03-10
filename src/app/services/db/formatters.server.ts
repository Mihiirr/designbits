import { Post, PostReaction, Prisma, User, VideoSource } from "@prisma/client"
import groupBy from "lodash.groupby"
import property from "lodash.property"
import { ASSETS_CDN_LINK } from "~/utils/constants"
import {
  SourceWithFormattedLogos,
  SourceWithLogos,
} from "./queries/post.server"
const sourcePriority = ["video/webm", "video/mp4"]

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
  CreatedBy: User
}

function formatInteractionPostsData(
  data: RawInteractionsPostData,
): FormattedInteractionsPostData[] {
  const { postsWithCurrentUserReactionData, totalReactionsOnPost } = data

  const reactionsCountByPostId = formatTotalReactionsData(totalReactionsOnPost)
  return postsWithCurrentUserReactionData.map(interactionPost => {
    const { PostReactions, Source, ...rest } = interactionPost
    return {
      ...rest,
      Source: formatSourceLogos(Source),
      reactionsCount: reactionsCountByPostId?.[interactionPost.id],
      reactedByLoggedInUser: PostReactions?.length ? true : false,
    }
  })
}

type SingleInteractionPostData =
  | Post & {
      PostReactions: PostReaction[]
      Source: SourceWithLogos
      CreatedBy: User
      VideoSources: VideoSource[]
      _count: {
        PostReactions: number
      }
    }

export type FormattedSingleInteractionsPostData = {
  reactionCount: number
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
  CreatedBy: User
  VideoSources: VideoSource[]
}

function videoSourcesSorter(a: VideoSource, b: VideoSource) {
  return sourcePriority.indexOf(a.type) - sourcePriority.indexOf(b.type)
}

const imageSourcePriority = [
  "image/avif",
  "image/webp",
  "image/png",
  "image/jpg",
]

export type FormattedSourceElementProps = { srcSet: string; type: string }

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

  const defaultSizePNGImage = sourcesGroupedByType["image/png"].find(
    x => x.size === null,
  )

  const fallBackImage = defaultSizePNGImage
    ? defaultSizePNGImage
    : sourcesGroupedByType["image/png"]?.[0]

  return { formattedLogos, fallBackImage, ...rest }
}

function formatSingleInteractionPostData(
  data: SingleInteractionPostData,
): FormattedSingleInteractionsPostData {
  const {
    _count: { PostReactions: reactionCount },
    VideoSources,
    PostReactions,
    Source,
    ...rest
  } = data
  return {
    ...rest,
    reactionCount,
    Source: formatSourceLogos(Source),
    VideoSources: VideoSources.sort(videoSourcesSorter),
    reactedByLoggedInUser: PostReactions?.length ? true : false,
  }
}

export { formatInteractionPostsData, formatSingleInteractionPostData }
