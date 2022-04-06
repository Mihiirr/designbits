import { ActionFunction, redirect } from "remix"
import { getSession } from "~/services/auth/session.server"

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request)

  await session?.signOut()

  return redirect("/explore/all", {
    headers: await session.getHeaders(),
  })
}
