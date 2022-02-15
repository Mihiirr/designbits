import { Post, PostReaction, Prisma, Source, User } from "@prisma/client"
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

async function findPostReactionsCount() {
  return db.postReaction.groupBy({
    by: ["postId"],
    _count: {
      id: true,
    },
  })
}

async function findInteractionsForCategory({ userId }: props) {
  const { default: pProps } = await import("p-props")

  return pProps({
    postsWithCurrentUserReactionData: findPostsIncludingUserReaction({
      userId,
    }),
    totalReactionsOnPost: findPostReactionsCount(),
  }) as unknown as {
    postsWithCurrentUserReactionData: (Post & {
      Source: Source
      CreatedBy: User
      PostReacritions?: PostReaction[]
    })[]
    totalReactionsOnPost: (Prisma.PickArray<
      Prisma.PostReactionGroupByOutputType,
      "postId"[]
    > & {
      _count: {
        id: number
      }
    })[]
  }
}

export { findInteractionsForCategory }
