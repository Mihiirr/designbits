import { LoaderFunction, redirect } from "remix"
import { getSession } from "~/services/auth/session.server"

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request)

  await session?.signOut()

  return redirect("/auth/login")
}
