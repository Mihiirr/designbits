import { Post, PostReaction, Prisma, SourceLogo, User } from "@prisma/client"
import { SetOptional } from "type-fest"
import { db } from "~/services/db/client.server"
import { FormattedSourceElementProps } from "../formatters.server"

type props = {
  userId?: User["id"]
}

export type SourceWithLogos = {
  SourceLogos: SourceLogo[]
  name: string
  url: string
}

export type SourceWithFormattedLogos = {
  formattedLogos: [string, FormattedSourceElementProps][]
  fallBackImage: SourceLogo
  name: string
  url: string
}

async function findPostsIncludingUserReaction({ userId }: props) {
  return db.post.findMany({
    include: {
      Source: {
        select: {
          SourceLogos: true,
          name: true,
          url: true,
        },
      },
      CreatedBy: true,
      PostReactions: userId
        ? {
            select: {
              reaction: true,
            },
            where: {
              reactedBy: userId,
            },
          }
        : false,
    },
    // _count: {
    //   select: { PostReactions: true },
    // },
  })
}

async function findPostsReactedByUser({ userId }: props) {
  return db.post.findMany({
    where: {
      PostReactions: {
        some: {
          reactedBy: userId,
        },
      },
    },
    include: {
      Source: {
        select: {
          SourceLogos: true,
          name: true,
          url: true,
        },
      },
      CreatedBy: true,
      PostReactions: true,
    },
  })
}

async function findPostReactionsCount() {
  return db.postReaction.groupBy({
    by: ["postId"],
    _count: {
      id: true,
    },
  })
}

type TotalReactionsOnPost = (Prisma.PickArray<
  Prisma.PostReactionGroupByOutputType,
  "postId"[]
> & {
  _count: {
    id: number
  }
})[]

type PostWithCurrentUserReactionData = Post & {
  Source: SourceWithLogos
  CreatedBy: User
  PostReactions: PostReaction[]
}

type PostIncludingCurrentUserReactionData = SetOptional<
  PostWithCurrentUserReactionData,
  "PostReactions"
>

async function findInteractionsForCategory({ userId }: props) {
  const { default: pProps } = await import("p-props")

  return pProps({
    postsWithCurrentUserReactionData: findPostsIncludingUserReaction({
      userId,
    }),
    totalReactionsOnPost: findPostReactionsCount(),
  }) as unknown as {
    postsWithCurrentUserReactionData: PostIncludingCurrentUserReactionData[]
    totalReactionsOnPost: TotalReactionsOnPost
  }
}

type FindPostPageDataProps = {
  postSlug: Post["slug"]
  userId?: User["id"]
}

function findPostPageData({ postSlug, userId }: FindPostPageDataProps) {
  return db.post.findUnique({
    where: {
      slug: postSlug,
    },
    include: {
      Source: {
        select: {
          SourceLogos: true,
          name: true,
          url: true,
        },
      },
      CreatedBy: true,
      VideoSources: true,
      PostReactions: userId
        ? {
            select: {
              reaction: true,
            },
            where: {
              reactedBy: userId,
            },
          }
        : false,
      _count: {
        select: {
          PostReactions: true,
        },
      },
    },
  })
}

async function findPostReactedByUser({ userId }: props) {
  const { default: pProps } = await import("p-props")

  return pProps({
    postsWithCurrentUserReactionData: findPostsReactedByUser({
      userId,
    }),
    totalReactionsOnPost: findPostReactionsCount(),
  }) as unknown as {
    postsWithCurrentUserReactionData: PostWithCurrentUserReactionData[]
    totalReactionsOnPost: TotalReactionsOnPost
  }
}

export { findInteractionsForCategory, findPostPageData, findPostReactedByUser }
