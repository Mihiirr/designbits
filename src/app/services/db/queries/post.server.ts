import { Post, User, VideoSize } from "@prisma/client"
import { AsyncReturnType } from "type-fest"
import { db } from "~/services/db/client.server"

type props = {
  userId?: User["id"]
  orderBy?: "recently-added" | "popular"
}

async function findPostsIncludingUserReaction({
  userId,
  orderBy = "recently-added",
}: props) {
  return db.post.findMany({
    include: {
      Source: {
        select: {
          SourceLogos: true,
          name: true,
          url: true,
        },
      },
      VideoSources: {
        select: {
          url: true,
          id: true,
          size: true,
          type: true,
        },
        where: {
          size: {
            in: [VideoSize.MEDIUM_480P, VideoSize.ORIGINAL],
          },
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
      PostComments: userId
        ? {
            select: {
              id: true,
            },
            where: {
              createdById: userId,
            },
          }
        : false,
      _count: {
        select: {
          PostComments: true,
        },
      },
    },
    orderBy: {
      ...(orderBy === "recently-added"
        ? {
            createdAt: "desc",
          }
        : {
            createdAt: "asc",
          }),
    },
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
      VideoSources: {
        select: {
          url: true,
          id: true,
          size: true,
          type: true,
        },
        where: {
          size: {
            in: [VideoSize.MEDIUM_480P, VideoSize.ORIGINAL],
          },
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
      PostComments: userId
        ? {
            select: {
              id: true,
            },
            where: {
              createdById: userId,
            },
          }
        : false,
      _count: {
        select: {
          PostComments: true,
        },
      },
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

type TotalReactionsOnPost = AsyncReturnType<typeof findPostReactionsCount>

type PostIncludingCurrentUserReactionData = AsyncReturnType<
  typeof findPostsIncludingUserReaction
>

async function findInteractionsForCategory({ userId, orderBy }: props) {
  const { default: pProps } = await import("p-props")

  return pProps({
    postsWithCurrentUserReactionData: findPostsIncludingUserReaction({
      userId,
      orderBy,
    }),
    totalReactionsOnPost: findPostReactionsCount(),
  }) as unknown as {
    postsWithCurrentUserReactionData: PostIncludingCurrentUserReactionData
    totalReactionsOnPost: TotalReactionsOnPost
  }
}

type FindPostPageDataProps = {
  postSlug: Post["slug"]
  userId?: User["id"]
}

async function findPostPageData({ postSlug, userId }: FindPostPageDataProps) {
  return db.post.findUnique({
    where: {
      slug: postSlug,
    },
    select: {
      id: true,
      slug: true,
      description: true,
      title: true,
      createdById: true,
      createdAt: true,
      Source: {
        select: {
          SourceLogos: true,
          name: true,
          url: true,
        },
      },
      CreatedBy: true,
      VideoSources: true,
      Tags: {
        select: {
          id: true,
          color: true,
          name: true,
        },
      },
      platform: true,
      PostComments: {
        select: {
          id: true,
          comment: true,
          createdAt: true,
          CreatedBy: {
            select: {
              id: true,
              profilePicture: true,
              name: true,
            },
          },
          CommentReactions: userId
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
              CommentReactions: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        where: {
          parentCommentId: null,
        },
      },
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
    postsWithCurrentUserReactionData: AsyncReturnType<
      typeof findPostsReactedByUser
    >
    totalReactionsOnPost: TotalReactionsOnPost
  }
}

export { findInteractionsForCategory, findPostPageData, findPostReactedByUser }
