import { useRef, useState } from "react"
import { Form } from "remix"
import Button from "../Button"
import { Label, Input, InputError } from "../form-elements"
import GoogleIcon from "../icons/Google"

type Props = {
  setFormValues: any
  data: any
  formValues: any
  formIsValid: any
  searchParams: any
}

const AuthForm = (props: Props) => {
  const [submitted, setSubmitted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <>
      <Form
        onChange={event => {
          const form = event.currentTarget
          props.setFormValues({
            email: form.email.value,
            redirectTo: form.redirectTo.value,
          })
        }}
        onSubmit={() => setSubmitted(true)}
        action="/auth/login"
        replace
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
            defaultValue={
              props.searchParams ? props.searchParams : "/explore/all"
            }
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
              props.data?.error ? "error-message" : "success-message"
            }
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={props.formValues?.email}
            required
            placeholder="Email address"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <Button type="submit" disabled={!props.formIsValid || submitted}>
            Email a login link
          </Button>
        </div>

        <div className="sr-only" aria-live="polite">
          {props.formIsValid
            ? "Sign in form is now valid and ready to submit"
            : "Sign in form is now invalid."}
        </div>

        <div className="mt-2">
          {props.data?.error ? (
            <InputError id="error-message">{props.data?.error}</InputError>
          ) : props.data?.email ? (
            <p
              id="success-message"
              className="text-lg text-gray-500 dark:text-slate-500"
            >
              <span role="img" aria-label="sparkles">
                ✨
              </span>
              {` A magic link has been sent to ${props.data?.email}.`}
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
  )
}

export default AuthForm
