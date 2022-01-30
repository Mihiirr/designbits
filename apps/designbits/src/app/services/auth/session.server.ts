import { createCookieSessionStorage, redirect } from "remix"
import type { User } from "database"
import {
  getUserByEmail,
  getUserFromSessionId,
  createSession,
} from "~/services/db/query-db.server"
import { getLoginInfoSession } from "./login.server"
import { getRequiredServerEnvVar } from "~/utils/env"
import { sendMagicLinkEmail } from "../email/email.server"
import { db } from "~/services/db/client.server"
import { getMagicLink, validateMagicLink } from "../db/magic-link.server"
import { LoginFields } from "~/types/auth"

const sessionIdKey = "__session_id__"

export const sessionExpirationTime = 1000 * 60 * 60 * 24 * 365

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "KCD_root_session",
    secure: true,
    secrets: [getRequiredServerEnvVar("SESSION_SECRET")],
    sameSite: "lax",
    path: "/",
    maxAge: sessionExpirationTime / 1000,
    httpOnly: true,
  },
})

async function sendToken({
  payload: { email, redirectTo },
  domainUrl,
}: {
  payload: LoginFields
  domainUrl: string
}) {
  const magicLink = getMagicLink({
    email,
    redirectTo,
    validateSessionMagicLink: true,
    domainUrl,
  })

  const user = await getUserByEmail(email).catch(() => {
    /* ignore... */
    return null
  })

  await sendMagicLinkEmail({
    email: email,
    magicLink,
    user,
    domainUrl,
  })
  return magicLink
}

async function getSession(request: Request) {
  const session = await sessionStorage.getSession(request.headers.get("Cookie"))
  const initialValue = await sessionStorage.commitSession(session)
  const getSessionId = () => session.get(sessionIdKey) as string | undefined
  const unsetSessionId = () => session.unset(sessionIdKey)

  const commit = async () => {
    const currentValue = await sessionStorage.commitSession(session)
    return currentValue === initialValue ? null : currentValue
  }
  return {
    session,
    getUser: async () => {
      const token = getSessionId()
      if (!token) return null

      return getUserFromSessionId(token).catch((error: unknown) => {
        unsetSessionId()
        console.error(`Failure getting user from session ID:`, error)
        return null
      })
    },
    getSessionId,
    unsetSessionId,
    signIn: async (user: Pick<User, "id">) => {
      const userSession = await createSession({ userId: user.id })
      session.set(sessionIdKey, userSession.id)
    },
    signOut: () => {
      const sessionId = getSessionId()
      if (sessionId) {
        unsetSessionId()
        db.session
          .delete({ where: { id: sessionId } })
          .catch((error: unknown) => {
            console.error(`Failure deleting user session: `, error)
          })
      }
    },
    commit,
    /**
     * This will initialize a Headers object if one is not provided.
     * It will set the 'Set-Cookie' header value on that headers object.
     * It will then return that Headers object.
     */
    getHeaders: async (headers: ResponseInit["headers"] = new Headers()) => {
      const value = await commit()
      if (!value) return headers
      if (headers instanceof Headers) {
        headers.append("Set-Cookie", value)
      } else if (Array.isArray(headers)) {
        headers.push(["Set-Cookie", value])
      } else {
        headers["Set-Cookie"] = value
      }
      return headers
    },
  }
}

async function deleteOtherSessions(request: Request) {
  const { session } = await getSession(request)

  const token = session.get(sessionIdKey) as string | undefined
  if (!token) {
    console.warn(
      `Trying to delete other sessions, but the request came from someone who has no sessions`,
    )
    return
  }
  const user = await getUserFromSessionId(token)
  await db.session.deleteMany({
    where: { userId: user.id, NOT: { id: token } },
  })
}

async function getUser(request: Request) {
  const { session } = await getSession(request)

  const token = session.get(sessionIdKey) as string | undefined
  if (!token) return null

  return getUserFromSessionId(token).catch((error: unknown) => {
    console.error(`Failure getting user from session ID:`, error)
    return null
  })
}

async function getUserSessionFromMagicLink(request: Request) {
  const loginInfoSession = await getLoginInfoSession(request)
  const email = await validateMagicLink(
    request.url,
    loginInfoSession.getMagicLink(),
  )

  const user = await getUserByEmail(email)
  if (!user) return null

  const session = await getSession(request)
  await session.signIn(user)
  return session
}

async function requireAdminUser(request: Request): Promise<User> {
  const user = await getUser(request)
  if (!user) {
    const session = await getSession(request)
    session.signOut()
    throw redirect("/auth/login", { headers: await session.getHeaders() })
  }
  if (user.role !== "ADMIN") {
    throw redirect("/")
  }
  return user
}

async function requireUser(request: Request): Promise<User> {
  const user = await getUser(request)
  if (!user) {
    const session = await getSession(request)
    session.signOut()
    throw redirect("/auth/login", { headers: await session.getHeaders() })
  }
  return user
}

export {
  getSession,
  deleteOtherSessions,
  getUserSessionFromMagicLink,
  requireUser,
  requireAdminUser,
  getUser,
  sendToken,
}
