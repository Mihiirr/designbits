import { Form } from "remix"
import { LoginActionData } from "../../routes/auth/login"

interface Props {
  searchParams: URLSearchParams
  actionData: LoginActionData | undefined
}

const LoginForm = (props: Props) => {
  const {
    searchParams,
    actionData = {
      error: {
        formErrors: [],
        fieldErrors: {
          email: [],
        },
      },
      fields: {
        email: "",
      },
    },
  } = props

  const { error, fields } = actionData

  return (
    <Form
      method="post"
      className="space-y-6"
      aria-describedby={
        actionData?.error.formErrors ? "form-error-message" : undefined
      }
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
            required
            className="block w-full appearance-none rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            aria-invalid={Boolean(error?.fieldErrors?.email)}
            aria-describedby={
              error?.fieldErrors?.email ? "username-error" : undefined
            }
            defaultValue={fields.email}
          />
          {error?.fieldErrors?.email ? (
            <p
              className="pt-1 text-sm text-red-500"
              role="alert"
              id="username-error"
            >
              {error?.fieldErrors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>
      </div>
      <div id="form-error-message">
        {error?.formErrors?.length ? (
          <p
            className="rounded-sm bg-red-50 py-1 px-2 text-sm text-red-500"
            role="alert"
          >
            {error?.formErrors.join(" & ")}
          </p>
        ) : null}
      </div>
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign in
        </button>
      </div>
    </Form>
  )
}

export default LoginForm
