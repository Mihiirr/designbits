import { useState } from "react"
import { Form, Link } from "remix"
import { SignUpActionData, SignUpLoaderData } from "~/routes/auth/sign-up"

interface Props {
  searchParams: URLSearchParams
  actionData?: SignUpActionData
  loaderData?: SignUpLoaderData
}

const SignUpForm = ({ searchParams, actionData, loaderData }: Props) => {
  const [formValues, setFormValues] = useState<{
    firstName: string
  }>({
    firstName: "",
  })

  const formIsValid = formValues.firstName.trim().length > 0

  const errors = actionData?.errors
  const fields = actionData?.fields

  return (
    <Form
      method="post"
      className="space-y-6"
      onChange={event => {
        const form = event.currentTarget
        setFormValues({
          firstName: form.firstName.value,
        })
      }}
    >
      <input
        type="hidden"
        name="redirectTo"
        className="hidden"
        value={searchParams.get("redirectTo") ?? undefined}
      />
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            readOnly={true}
            required
            className="block py-2 px-3 w-full placeholder:text-gray-400 rounded-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 shadow-sm read-only:opacity-50 appearance-none sm:text-sm"
            aria-invalid={Boolean(errors?.email)}
            aria-describedby={errors?.email ? "username-error" : undefined}
            defaultValue={loaderData?.email}
          />
          {errors?.email ? (
            <p
              className="pt-1 text-sm text-red-500"
              role="alert"
              id="username-error"
            >
              {errors?.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          First name
        </label>
        <div className="mt-1">
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="current-firstName"
            required
            className="block py-2 px-3 w-full placeholder:text-gray-400 rounded-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 shadow-sm appearance-none sm:text-sm"
            aria-invalid={Boolean(errors?.firstName) || undefined}
            aria-describedby={errors?.firstName ? "firstName-error" : undefined}
            defaultValue={fields?.firstName}
          />
          {errors?.firstName ? (
            <p
              className="pt-1 text-sm text-red-500"
              role="alert"
              id="firstName-error"
            >
              {errors.firstName}
            </p>
          ) : null}
        </div>
      </div>

      {/* <div id="form-error-message">
        {errors?.length ? (
          <p
            className="py-1 px-2 text-sm text-red-500 bg-red-50 rounded-sm"
            role="alert"
          >
            {error?.formErrors.join(" & ")}
          </p>
        ) : null}
      </div> */}
      <div>
        <button
          type="submit"
          disabled={!formIsValid}
          className="flex justify-center py-2 px-4 w-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm"
        >
          Create Account
        </button>
      </div>
    </Form>
  )
}

export default SignUpForm
