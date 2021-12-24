import React from "react"
import { Form, Link } from "remix"
import { LoginActionData } from "~/routes/auth/login"

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
          password: [],
        },
      },
      fields: {
        email: "",
        password: "",
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
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            aria-invalid={Boolean(error?.fieldErrors?.email)}
            aria-describedby={
              error?.fieldErrors?.email ? "username-error" : undefined
            }
            defaultValue={fields.email}
          />
          {error?.fieldErrors?.email ? (
            <p
              className="text-red-500 text-sm pt-1"
              role="alert"
              id="username-error"
            >
              {error?.fieldErrors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            aria-invalid={Boolean(error?.fieldErrors?.password) || undefined}
            aria-describedby={
              error?.fieldErrors?.password ? "password-error" : undefined
            }
            defaultValue={fields.password}
          />
          {error?.fieldErrors?.password ? (
            <p
              className="text-red-500 text-sm pt-1"
              role="alert"
              id="password-error"
            >
              {error?.fieldErrors.password}
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
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <Link
            to="/auth/forgot-password"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
      <div id="form-error-message">
        {error?.formErrors?.length ? (
          <p
            className="text-red-500 text-sm px-2 py-1 bg-red-50 rounded-sm"
            role="alert"
          >
            {error?.formErrors.join(" & ")}
          </p>
        ) : null}
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </div>
    </Form>
  )
}

export default LoginForm
