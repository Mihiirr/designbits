import type { Session, User } from "@prisma/client"
import { Except } from "type-fest"
import { sessionExpirationTime } from "../auth/session.server"
import { db } from "./prisma.server"

async function createSession(
  sessionData: Omit<Session, "id" | "expirationDate" | "createdAt">,
) {
  return db.session.create({
    data: {
      ...sessionData,
      expirationDate: new Date(Date.now() + sessionExpirationTime),
    },
  })
}

async function getUserFromSessionId(sessionId: string) {
  const session = await db.session.findUnique({
    where: { id: sessionId },
    include: { User: true },
  })
  if (!session) {
    throw new Error("No user found")
  }

  if (Date.now() > session.expirationDate.getTime()) {
    await db.session.delete({ where: { id: sessionId } })
    throw new Error("Session expired. Please request a new magic link.")
  }

  // if there's less than ~six months left, extend the session
  const twoWeeks = 1000 * 60 * 60 * 24 * 30 * 6
  if (Date.now() + twoWeeks > session.expirationDate.getTime()) {
    const newExpirationDate = new Date(Date.now() + sessionExpirationTime)
    await db.session.update({
      data: { expirationDate: newExpirationDate },
      where: { id: sessionId },
    })
  }

  return session.User
}

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

export {
  createSession,
  getUserFromSessionId,
  getUserByEmail,
  updateUser,
  deleteUser,
  getAllUserData,
}
