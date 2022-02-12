import { db } from "~/services/db/client.server"
import { Session } from "@prisma/client"

export const sessionExpirationTime = 1000 * 60 * 60 * 24 * 365

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

async function findSession(sessionId: string) {
  return db.session.findUnique({
    where: { id: sessionId },
    include: { User: true },
  })
}

async function deleteSession(sessionId: string) {
  return db.session.delete({ where: { id: sessionId } })
}

async function updateSession(newExpirationDate: Date, sessionId: string) {
  return db.session.update({
    data: { expirationDate: newExpirationDate },
    where: { id: sessionId },
  })
}

export { createSession, findSession, deleteSession, updateSession }
