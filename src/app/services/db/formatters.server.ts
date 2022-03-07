import {
  Post,
  PostReaction,
  Prisma,
  Source,
  User,
  VideoSource,
} from "@prisma/client"
import property from "lodash.property"
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
    Source: Source
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
  Source: Source
  CreatedBy: User
}

function formatInteractionPostsData(
  data: RawInteractionsPostData,
): FormattedInteractionsPostData[] {
  const { postsWithCurrentUserReactionData, totalReactionsOnPost } = data

  const reactionsCountByPostId = formatTotalReactionsData(totalReactionsOnPost)
  return postsWithCurrentUserReactionData.map(interactionPost => {
    const { PostReactions, ...rest } = interactionPost
    return {
      ...rest,
      reactionsCount: reactionsCountByPostId?.[interactionPost.id],
      reactedByLoggedInUser: PostReactions?.length ? true : false,
    }
  })
}

type SingleInteractionPostData =
  | Post & {
      PostReactions: PostReaction[]
      Source: Source
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
  Source: Source
  CreatedBy: User
  VideoSources: VideoSource[]
}

function videoSourcesSorter(a: VideoSource, b: VideoSource) {
  return sourcePriority.indexOf(a.type) - sourcePriority.indexOf(b.type)
}

function formatSingleInteractionPostData(
  data: SingleInteractionPostData,
): FormattedSingleInteractionsPostData {
  const {
    _count: { PostReactions: reactionCount },
    VideoSources,
    PostReactions,
    ...rest
  } = data
  return {
    ...rest,
    reactionCount,
    VideoSources: VideoSources.sort(videoSourcesSorter),
    reactedByLoggedInUser: PostReactions?.length ? true : false,
  }
}

export { formatInteractionPostsData, formatSingleInteractionPostData }
