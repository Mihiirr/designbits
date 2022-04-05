import { useCallback, useRef, useState } from "react"
import { Form, useFetcher, useTransition } from "remix"
import { z } from "zod"
import Button from "../Button"
import { Label, Input, InputError } from "../form-elements"
import GoogleIcon from "../icons/Google"

const LoginSchema = z.object({
  email: z.string().email().max(256),
  redirectTo: z.string().nullable(),
})

type Props = {
  redirectTo?: string | null
}

const AuthForm: React.FC<Props> = ({ redirectTo = "/explore/all" }) => {
  const fetcher = useFetcher()
  const data = fetcher.data

  const inputRef = useRef<HTMLInputElement>(null)
  const [formValues, setFormValues] = useState({
    email: data?.email ?? "",
    redirectTo: data?.redirectTo ?? "",
  })

  const { success: formIsValid } = LoginSchema.safeParse(formValues)

  const handleSubmit = useCallback(async event => {
    event.preventDefault()
    fetcher.submit(event.currentTarget, {
      action: "/auth/login",
      method: "post",
      replace: true,
    })
  }, [])

  const transition = useTransition()

  const btnText =
    transition.state === "submitting"
      ? "Sending email..."
      : transition.state === "loading"
      ? "Sent!"
      : "Email a login link"

  return (
    <>
      <fetcher.Form
        onChange={event => {
          const form = event.currentTarget
          setFormValues({
            email: form.email.value,
            redirectTo: form.redirectTo.value,
          })
        }}
        onSubmit={handleSubmit}
        className="mb-4 lg:mb-6"
      >
        <div className="hidden">
          <Label htmlFor="redirect-to">redirect to</Label>
          <Input
            id="redirect-to"
            name="redirectTo"
            type="text"
            readOnly
            defaultValue={redirectTo || "/explore/all"}
          />
        </div>
        <div className="mb-6">
          <Input
            ref={inputRef}
            autoFocus
            aria-describedby={data?.error ? "error-message" : "success-message"}
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={data?.email}
            required
            placeholder="Enter your email address"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <Button
            type="submit"
            disabled={!formIsValid || fetcher.type === "done"}
          >
            {btnText}
          </Button>
        </div>

        <div className="sr-only" aria-live="polite">
          {formIsValid
            ? "Sign in form is now valid and ready to submit"
            : "Sign in form is now invalid."}
        </div>

        <div className="mt-2">
          {data?.error ? (
            <InputError id="error-message">{data?.error}</InputError>
          ) : data?.email ? (
            <p
              id="success-message"
              className="text-lg text-gray-500 dark:text-slate-500"
            >
              <span role="img" aria-label="sparkles">
                ✨
              </span>
              {` A magic link has been sent to ${data?.email}.`}
            </p>
          ) : null}
        </div>
      </fetcher.Form>
      <div className="my-6 px-1 text-sm text-gray-800">Or</div>
      <Form action="/auth/google" method="post">
        <Button variant="secondary" type="submit">
          <GoogleIcon />
          <span className="pl-2">Login with Google</span>
        </Button>
      </Form>
    </>
  )
}

export default AuthForm
