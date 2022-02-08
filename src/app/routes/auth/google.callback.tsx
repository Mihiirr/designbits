import { LoaderFunction, redirect } from "remix"
import { authenticator } from "~/services/auth/authenticator.server"
import { getLoginInfoSession } from "~/services/auth/login.server"
import { getSession } from "~/services/auth/session.server"

export let loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.authenticate("google", request, {
    failureRedirect: "/auth/login",
  })
  const loginInfoSession = await getLoginInfoSession(request)

  if (user) {
    const session = await getSession(request)
    const headers = new Headers()
    await session.signIn(user)
    await session.getHeaders(headers)
    // IDEA: try using destroy... Didn't seem to work last time I tried though.
    loginInfoSession.clean()
    await loginInfoSession.getHeaders(headers)
    return redirect("/me", { headers })
  }
  return redirect("/auth/login")

  // and store the user data
  // session.set(authenticator.sessionKey, user)
}
