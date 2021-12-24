import AuthHeading from "~/components/auth/AuthHeading"
import AuthLayout from "~/components/AuthLayout"

interface Props {}

const SignUp = (props: Props) => {
  return (
    <AuthLayout
      heading={
        <AuthHeading
          title="Sign up to save your favorites!"
          altLabel="Sign in"
          altLink="/auth/login"
        />
      }
      authForm={<></>}
    />
  )
}

export default SignUp
