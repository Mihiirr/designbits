import {
  HeadersFunction,
  json,
  LoaderFunction,
  MetaFunction,
  redirect,
  useSearchParams,
} from "remix"
import type { ActionFunction } from "remix"
import AuthLayout from "~/components/AuthLayout"
import { z, ZodError } from "zod"
import { RequireAtLeastOne } from "type-fest"
import { getLoginInfoSession } from "~/services/auth/login.server"
import {
  getDomainUrl,
  getErrorMessage,
  reuseUsefulLoaderHeaders,
} from "~/utils/misc"
import { getUser, sendToken } from "~/services/auth/session.server"
import type { LoginFields } from "~/types/auth"
import AuthForm from "~/components/auth/AuthForm"
import { OkResponse } from "~/utils/response-helpers.server"

const LoginSchema = z.object({
  email: z.string().email().max(256),
  redirectTo: z.string().nullable(),
})

export type LoginActionData = {
  error: RequireAtLeastOne<
    ZodError<LoginFields>["formErrors"],
    "fieldErrors" | "formErrors"
  >
  fields: Partial<LoginFields>
}

type LoaderData = {
  email?: string
  error?: string
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request)
  if (user) return redirect("/explore/all")

  const loginSession = await getLoginInfoSession(request)

  const data: LoaderData = {
    email: loginSession.getEmail(),
    error: loginSession.getError(),
  }

  const headers = new Headers({
    "Cache-Control": "private, max-age=3600",
    Vary: "Cookie",
  })
  await loginSession.getHeaders(headers)

  return json(data, { headers })
}

export const action: ActionFunction = async ({ request }) => {
  const params = new URLSearchParams(await request.text())
  const loginSession = await getLoginInfoSession(request)

  const emailAddress = params.get("email")
  const redirectTo = params.get("redirectTo")
  if (emailAddress) loginSession.setEmail(emailAddress)
  if (redirectTo) loginSession.setRedirectTo(redirectTo)
  const emailValidation = LoginSchema.safeParse({
    email: emailAddress,
    redirectTo: redirectTo,
  })
  if (!emailValidation.success) {
    loginSession.flashError("A valid email is required")
    return redirect(`/auth/login`, {
      status: 400,
      headers: await loginSession.getHeaders(),
    })
  }

  const validatedData = emailValidation.data
  try {
    const domainUrl = getDomainUrl(request)
    const magicLink = await sendToken({
      payload: validatedData,
      domainUrl,
    })
    loginSession.setMagicLink(magicLink)
    return OkResponse({
      data: {},
      errors: [],
      headers: await loginSession.getHeaders(),
    })
  } catch (e: unknown) {
    loginSession.flashError(getErrorMessage(e))
    return redirect(`/auth/login`, {
      status: 400,
      headers: await loginSession.getHeaders(),
    })
  }
}

const Login = () => {
  const [searchParams] = useSearchParams()
  return (
    <AuthLayout
      title="Log in to your account."
      subtitle="Or sign up for an account."
      authForm={
        <>
          <AuthForm redirectTo={searchParams.get("redirectTo")} />
        </>
      }
    />
  )
}

export const headers: HeadersFunction = reuseUsefulLoaderHeaders

export const meta: MetaFunction = () => {
  return {
    title: "Login | DesignBits",
    description: `login to discover interactions.`,
  }
}

export default Login
