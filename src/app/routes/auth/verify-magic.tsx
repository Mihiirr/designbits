import type { LoaderFunction } from "remix"
import { redirect } from "remix"
import { getErrorMessage } from "~/utils/misc"
import { getLoginInfoSession } from "~/services/auth/login.server"
import { getUserSessionFromMagicLink } from "~/services/auth/session.server"

export const loader: LoaderFunction = async ({ request }) => {
  const loginInfoSession = await getLoginInfoSession(request)
  try {
    const session = await getUserSessionFromMagicLink(request)
    loginInfoSession.setMagicLinkVerified(true)
    if (session) {
      const headers = new Headers()
      loginInfoSession.clean()
      await loginInfoSession.getHeaders(headers)
      await session.getHeaders(headers)
      return redirect(`${loginInfoSession.getRedirectTo()}`, { headers })
    } else {
      loginInfoSession.setMagicLink(request.url)
      return redirect("/auth/sign-up", {
        headers: await loginInfoSession.getHeaders(),
      })
    }
  } catch (error: unknown) {
    console.error(error)
    loginInfoSession.clean()
    loginInfoSession.flashError(
      getErrorMessage(error) ||
        "Sign in link invalid. Please request a new one.",
    )
    return redirect("/auth/login", {
      headers: await loginInfoSession.getHeaders(),
    })
  }
}

export default function Magic() {
  return (
    <div>
      {`Congrats! You're seeing something you shouldn't ever be able to see because you should have been redirected. Good job!`}
    </div>
  )
}
