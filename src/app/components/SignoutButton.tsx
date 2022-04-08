import clsx from "clsx"
import React from "react"
import { Form } from "remix"

type Props = {
  active: boolean
}

const SignoutButton = (props: Props) => {
  return (
    <Form action="/auth/logout" method="post" replace reloadDocument>
      <button
        type="submit"
        className={clsx(
          props.active ? "bg-gray-100" : "",
          "block w-full px-4 py-2 text-left text-sm text-gray-700",
        )}
      >
        Sign out
      </button>
    </Form>
  )
}

export default SignoutButton
