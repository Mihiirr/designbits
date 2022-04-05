import {
  Form,
  HeadersFunction,
  json,
  LoaderFunction,
  MetaFunction,
  redirect,
  useLoaderData,
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
import { useRef, useState } from "react"
import Button from "~/components/Button"
import { Input, InputError, Label } from "~/components/form-elements"
import type { LoginFields } from "~/types/auth"
import GoogleIcon from "~/components/icons/Google"

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
  if (emailAddress) loginSession.setEmail(emailAddress)

  const emailValidation = LoginSchema.safeParse({
    email: emailAddress,
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
    return redirect(`/auth/login`, {
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
  const data = useLoaderData<LoaderData>()
  const inputRef = useRef<HTMLInputElement>(null)
  const [submitted, setSubmitted] = useState(false)

  const [formValues, setFormValues] = useState({
    email: data.email ?? "",
    redirectTo: data.email ?? "",
  })

  const { success: formIsValid } = LoginSchema.safeParse(formValues)

  const [searchParams] = useSearchParams()

  return (
    <AuthLayout
      title="Log in to your account."
      subtitle="Or sign up for an account."
      authForm={
        <>
          <Form
            onChange={event => {
              const form = event.currentTarget
              setFormValues({
                email: form.email.value,
                redirectTo: form.redirectTo.value,
              })
            }}
            onSubmit={() => setSubmitted(true)}
            action="/auth/login"
            method="post"
            className="mb-10 lg:mb-12"
          >
            <div className="hidden">
              <Label htmlFor="redirect-to">redirect to</Label>
              <Input
                id="redirect-to"
                name="redirectTo"
                type="text"
                readOnly
                defaultValue={searchParams.get("redirectTo") || ""}
              />
            </div>
            <div className="mb-6">
              <div className="mb-4 flex flex-wrap items-baseline justify-between">
                <Label htmlFor="email-address">Email address</Label>
              </div>
              <Input
                ref={inputRef}
                autoFocus
                aria-describedby={
                  data.error ? "error-message" : "success-message"
                }
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                defaultValue={formValues.email}
                required
                placeholder="Email address"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <Button type="submit" disabled={!formIsValid || submitted}>
                Email a login link
              </Button>
            </div>

            <div className="sr-only" aria-live="polite">
              {formIsValid
                ? "Sign in form is now valid and ready to submit"
                : "Sign in form is now invalid."}
            </div>

            <div className="mt-2">
              {data.error ? (
                <InputError id="error-message">{data.error}</InputError>
              ) : data.email ? (
                <p
                  id="success-message"
                  className="text-lg text-gray-500 dark:text-slate-500"
                >
                  <span role="img" aria-label="sparkles">
                    ✨
                  </span>
                  {` A magic link has been sent to ${data.email}.`}
                </p>
              ) : null}
            </div>
          </Form>
          <Form action="/auth/google" method="post">
            <Button variant="secondary" type="submit">
              <GoogleIcon />
              <span className="pl-2">Login with Google</span>
            </Button>
          </Form>
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
