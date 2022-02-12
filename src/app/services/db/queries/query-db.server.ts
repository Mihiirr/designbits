import type { User } from "@prisma/client"
import { Except } from "type-fest"
import { db } from "~/services/db/client.server"

function getUserByEmail(email: string) {
  return db.user.findUnique({ where: { email } })
}

async function deleteUser(userId: string) {
  return db.user.delete({ where: { id: userId } })
}

async function getAllUserData(userId: string) {
  const { default: pProps } = await import("p-props")
  return pProps({
    user: db.user.findUnique({ where: { id: userId } }),
    sessions: db.session.findMany({ where: { userId } }),
  })
}

function updateUser(
  userId: string,
  updatedInfo: Except<
    Partial<User>,
    "id" | "email" | "createdAt" | "modifiedAt"
  >,
) {
  return db.user.update({ where: { id: userId }, data: updatedInfo })
}

export { getUserByEmail, updateUser, deleteUser, getAllUserData }
