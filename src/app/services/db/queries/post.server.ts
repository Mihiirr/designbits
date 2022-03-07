import { Post, PostReaction, Prisma, Source, User } from "@prisma/client"
import { SetOptional } from "type-fest"
import { db } from "~/services/db/client.server"

type props = {
  userId?: User["id"]
}

async function findPostsIncludingUserReaction({ userId }: props) {
  return db.post.findMany({
    include: {
      Source: true,
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
      Source: true,
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
  Source: Source
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

export { findInteractionsForCategory, findPostReactedByUser }
