import { LoaderFunction } from "remix"
import { authenticator } from "~/services/auth/authenticator.server"

export let loader: LoaderFunction = ({ request }) => {
  return authenticator.authenticate("google", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
}
