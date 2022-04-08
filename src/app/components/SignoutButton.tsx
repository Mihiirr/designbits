import { Menu } from "@headlessui/react"
import clsx from "clsx"
import React from "react"
import { Form } from "remix"

type Props = {}

const SignoutButton = (props: Props) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <Form action="/auth/logout" method="post" replace reloadDocument>
          <button
            type="submit"
            className={clsx(
              active ? "bg-gray-100" : "",
              "block w-full px-4 py-2 text-left text-sm text-gray-700",
            )}
          >
            Sign out
          </button>
        </Form>
      )}
    </Menu.Item>
  )
}

export default SignoutButton
