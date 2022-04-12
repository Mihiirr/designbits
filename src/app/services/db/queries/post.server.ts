import { Device, Post, User, VideoSize, Platfrom } from "@prisma/client"
import { AsyncReturnType } from "type-fest"
import { db } from "~/services/db/client.server"

export type PostsOrderBy = "recently-added" | "popular"

type props = {
  userId?: User["id"]
  orderBy?: PostsOrderBy
  filters?: {
    device?: Device
    platforms?: Platfrom[]
    industries?: string[]
  }
}

async function findPostsIncludingUserReaction({
  userId,
  orderBy = "recently-added",
  filters,
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
    where: {
      device: {
        equals: filters?.device,
      },
      ...(filters?.platforms?.length
        ? {
            platform: {
              in: filters?.platforms,
            },
          }
        : {}),
      ...(filters?.industries?.length
        ? {
            Industries: {
              some: {
                slug: {
                  in: filters?.industries,
                },
              },
            },
          }
        : {}),
    },
    ...(orderBy === "recently-added" && {
      orderBy: {
        createdAt: "desc",
      },
    }),
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

async function findInteractionsForCategory({
  userId,
  orderBy,
  filters,
}: props) {
  const { default: pProps } = await import("p-props")

  return pProps({
    postsWithCurrentUserReactionData: findPostsIncludingUserReaction({
      userId,
      orderBy,
      filters,
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
              ReplyComments: true,
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

export { findInteractionsForCategory, findPostPageData }
