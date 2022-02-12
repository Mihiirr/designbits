import { User } from "@prisma/client"
import { db } from "~/services/db/client.server"

function findInteractionsForCategory({ userId }: { userId?: User["id"] }) {
  return db.post.findMany({
    include: {
      Source: true,
      CreatedBy: true,
      ...(userId
        ? {
            PostReactions: {
              select: {
                reaction: true,
              },
              where: {
                reactedBy: userId,
              },
            },
          }
        : {}),
      _count: {
        select: { PostReactions: true },
      },
    },
  })
}

export { findInteractionsForCategory }
