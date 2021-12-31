import { json, useActionData, useSearchParams } from "remix"
import type { ActionFunction } from "remix"
import AuthHeading from "~/components/auth/AuthHeading"
import { createUserSession, login } from "../../utils/session.server"
import LoginForm from "~/components/auth/LoginForm"
import AuthLayout from "~/components/AuthLayout"
import { z, ZodError } from "zod"
import { RequireAtLeastOne } from "type-fest"

const LoginSchema = z.object({
  email: z.string().email().max(256),
  password: z.string().min(8).max(20),
  redirectTo: z.string().optional(),
})

type LoginFormFields = z.infer<typeof LoginSchema>

export type LoginActionData = {
  error: RequireAtLeastOne<
    ZodError<LoginFormFields>["formErrors"],
    "fieldErrors" | "formErrors"
  >
  fields: Partial<LoginFormFields>
}

const badRequest = (data: LoginActionData) => json(data, { status: 400 })
const internalError = (data: LoginActionData) => json(data, { status: 500 })

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()

  const fields = {
    email: form.get("email"),
    password: form.get("password"),
    redirectTo: form.get("redirectTo"),
  }

  try {
    const validatedFields = LoginSchema.parse(fields)
    const { email, password, redirectTo = "/explore" } = validatedFields
    const user = await login({ email, password })

    if (!user) {
      return badRequest({
        error: {
          formErrors: [`Username/Password combination is incorrect`],
        },
        fields: {
          email,
          password,
          redirectTo,
        },
      })
    }
    return createUserSession(user.id, redirectTo)
  } catch (error: ZodError<LoginFormFields>["formErrors"] | unknown) {
    if (error instanceof ZodError) {
      return badRequest({
        fields: fields as LoginFormFields,
        error: error.formErrors as ZodError<LoginFormFields>["formErrors"],
      })
    } else {
      return internalError({
        fields: fields as LoginFormFields,
        error: {
          formErrors: ["Something went wrong!"],
        },
      })
    }
  }
}

interface Props {}

const Login = (props: Props) => {
  const actionData = useActionData<LoginActionData>()

  const [searchParams] = useSearchParams()

  return (
    <AuthLayout
      heading={
        <AuthHeading
          title="Sign in to your account"
          altLabel="Sign up"
          altLink="/auth/sign-up"
        />
      }
      authForm={
        <LoginForm searchParams={searchParams} actionData={actionData} />
      }
    />
  )
}

export default Login
