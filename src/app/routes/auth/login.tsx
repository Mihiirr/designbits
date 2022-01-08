import {
  Form,
  json,
  LoaderFunction,
  redirect,
  useActionData,
  useLoaderData,
  useSearchParams,
} from "remix"
import type { ActionFunction } from "remix"
import LoginForm from "~/components/auth/LoginForm"
import AuthLayout from "~/components/AuthLayout"
import { z, ZodError } from "zod"
import { RequireAtLeastOne } from "type-fest"
import { getLoginInfoSession } from "~/services/auth/login.server"
import { getDomainUrl, getErrorMessage } from "~/utils/misc"
import { getUser, sendToken } from "~/services/auth/session.server"
import { useRef, useState } from "react"
import Button from "~/components/Button"
import { Input, InputError, Label } from "~/components/form-elements"

const LoginSchema = z.object({
  email: z.string().email().max(256),
  redirectTo: z.string().nullable(),
})

type LoginFormFields = z.infer<typeof LoginSchema>

export type LoginActionData = {
  error: RequireAtLeastOne<
    ZodError<LoginFormFields>["formErrors"],
    "fieldErrors" | "formErrors"
  >
  fields: Partial<LoginFormFields>
}

type LoaderData = {
  email?: string
  error?: string
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request)
  if (user) return redirect("/me")

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

  if (!emailAddress?.match(/.+@.+/)) {
    loginSession.flashError("A valid email is required")
    return redirect(`/auth/login`, {
      status: 400,
      headers: await loginSession.getHeaders(),
    })
  }

  // // try {
  // //   const verifierResult = await verifyEmailAddress(emailAddress)
  // //   if (!verifierResult.status) {
  // //     const errorMessage = `I tried to verify that email and got this error message: "${verifierResult.error.message}". If you think this is wrong, shoot an email to team@kentcdodds.com.`
  // //     loginSession.flashError(errorMessage)
  // //     return redirect(`/auth/login`, {
  // //       status: 400,
  // //       headers: await loginSession.getHeaders(),
  // //     })
  // //   }
  // // } catch (error: unknown) {
  // //   console.error(`There was an error verifying an email address:`, error)
  // //   // continue on... This was probably our fault...
  // //   // IDEA: notify me of this issue...
  // // }

  try {
    const domainUrl = getDomainUrl(request)
    const magicLink = await sendToken({ emailAddress, domainUrl })
    console.log({ domainUrl, magicLink })
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

interface Props {}

const Login = (props: Props) => {
  const data = useLoaderData<LoaderData>()
  const inputRef = useRef<HTMLInputElement>(null)
  const [submitted, setSubmitted] = useState(false)

  const [formValues, setFormValues] = useState({
    email: data.email ?? "",
  })

  const formIsValid = formValues.email.match(/.+@.+/)

  const [searchParams] = useSearchParams()

  return (
    <AuthLayout
      title="Log in to your account."
      subtitle="Or sign up for an account."
      authForm={
        <Form
          onChange={event => {
            const form = event.currentTarget
            setFormValues({ email: form.email.value })
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
            <div className="flex flex-wrap justify-between items-baseline mb-4">
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
                className="text-lg text-gray-500 dark:text-blueGray-500"
              >
                <span role="img" aria-label="sparkles">
                  ✨
                </span>
                {` A magic link has been sent to ${data.email}.`}
              </p>
            ) : null}
          </div>
        </Form>
      }
    />
  )
}

export default Login
