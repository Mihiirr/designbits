import { ActionFunction, LoaderFunction, redirect } from "remix"
import { authenticator } from "~/services/auth/authenticator.server"

export let loader: LoaderFunction = () => redirect("/login")

export let action: ActionFunction = ({ request }) => {
  return authenticator.authenticate("google", request)
}
