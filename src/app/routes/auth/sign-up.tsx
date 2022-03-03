import AuthLayout from "~/components/AuthLayout"
import {
  json,
  redirect,
  useLoaderData,
  useActionData,
  useSearchParams,
  MetaFunction,
} from "remix"
import type { ActionFunction, LoaderFunction } from "remix"
import { getErrorStack } from "~/utils/misc"
import { handleFormSubmission } from "~/utils/actions.server"
import { getLoginInfoSession } from "~/services/auth/login.server"
import { getSession, getUser } from "~/services/auth/session.server"
import { validateMagicLink } from "~/services/db/magic-link.server"
import { db } from "~/services/db/client.server"
import SignUpForm from "~/components/auth/SignUpForm"
import { z } from "zod"
import { SignUpSchema } from "~/services/validations/action-schemas.server"
import { CardActionFormData } from "~/types/utilities"

type SignUpFormFields = z.infer<typeof SignUpSchema>

export type SignUpActionData = {
  status: "success" | "error"
  errors: SignUpFormFields
  fields: Partial<SignUpFormFields>
}

export type SignUpLoaderData = {
  email: string
}

const actionIds = {
  cancel: "cancel",
  signUp: "sign up",
}

export const action: ActionFunction = async ({ request }) => {
  const loginInfoSession = await getLoginInfoSession(request)

  const formData = await request.formData()
  const form = Object.fromEntries(formData) as CardActionFormData

  const session = await getSession(request)
  const magicLink = loginInfoSession.getMagicLink()
  let email: string
  try {
    if (typeof magicLink !== "string") {
      throw new Error("email and magicLink required.")
    }

    email = await validateMagicLink(magicLink, loginInfoSession.getMagicLink())
  } catch (error: unknown) {
    console.error(getErrorStack(error))

    loginInfoSession.clean()
    loginInfoSession.flashError(
      "Sign in link invalid. Please request a new one.",
    )
    return redirect("/auth/login", {
      headers: await loginInfoSession.getHeaders(),
    })
  }

  return handleFormSubmission<SignUpActionData, typeof SignUpSchema>({
    form,
    validationSchema: SignUpSchema,
    handleFormValues: async formData => {
      const { firstName } = formData
      try {
        const user = await db.user.create({
          data: { email, name: firstName, profileSlug: firstName ?? "" },
        })
        const headers = new Headers()
        await session.signIn(user)
        await session.getHeaders(headers)
        // IDEA: try using destroy... Didn't seem to work last time I tried though.
        loginInfoSession.clean()
        await loginInfoSession.getHeaders(headers)
        return redirect("/me", { headers })
      } catch (error: unknown) {
        console.error(getErrorStack(error))

        loginInfoSession.flashError(
          "There was a problem creating your account. Please try again.",
        )
        return redirect("/auth/login", {
          headers: await loginInfoSession.getHeaders(),
        })
      }
    },
  })
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request)
  if (user) return redirect("/me")

  const loginInfoSession = await getLoginInfoSession(request)
  const magicLink = loginInfoSession.getMagicLink()
  const email = loginInfoSession.getEmail()
  if (!magicLink || !email) {
    loginInfoSession.clean()
    loginInfoSession.flashError("Invalid magic link. Try again.")
    return redirect("/auth/login", {
      headers: await loginInfoSession.getHeaders(),
    })
  }

  const userForMagicLink = await db.user.findFirst({
    where: { email },
    select: { id: true },
  })

  if (userForMagicLink) {
    // user exists, but they haven't clicked their magic link yet
    // we don't want to tell them that a user exists with that email though
    // so we'll invalidate the magic link and force them to try again.
    loginInfoSession.clean()
    loginInfoSession.flashError("Invalid magic link. Try again.")
    return redirect("/auth/login", {
      headers: await loginInfoSession.getHeaders(),
    })
  }

  const values: SignUpLoaderData = {
    email,
  }
  return json(values, {
    headers: await loginInfoSession.getHeaders(),
  })
}

interface Props {}

const SignUp = (props: Props) => {
  const loaderData = useLoaderData<SignUpLoaderData>()
  const actionData = useActionData<SignUpActionData>()
  const [searchParams] = useSearchParams()

  console.log({ data: loaderData, actionData })

  return (
    <AuthLayout
      title="Log in to your account."
      subtitle="Or sign up for an account."
      authForm={
        <SignUpForm
          searchParams={searchParams}
          actionData={actionData}
          loaderData={loaderData}
        ></SignUpForm>
      }
    />
  )
}
export const meta: MetaFunction = () => {
  return {
    title: "Signup | DesignBits",
    description: `Create an account to discover interactions.`,
  }
}

export default SignUp
