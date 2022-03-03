import React from "react"
import { Form } from "remix"
import { CARD_ACTIONS, COMMENT_ACTIONS } from "~/utils/constants"

type Props = {
  formPayload: {
    [name: string]: string | number | readonly string[] | undefined
  }
  actionName: CARD_ACTIONS | COMMENT_ACTIONS
}

export const ActionButton: React.FC<Props> = ({
  formPayload,
  actionName,
  children,
}) => {
  return (
    <Form method="post">
      {Object.entries(formPayload).map(([key, value]) => (
        <input type="hidden" name={key} value={value} />
      ))}
      <input type="hidden" name="_action" value={actionName} />
      <button
        type="submit"
        className="flex items-center space-x-1 rounded-sm py-0.5 px-1 hover:bg-indigo-50 hover:text-indigo-500 focus:bg-indigo-50 focus:text-indigo-500"
      >
        {children}
      </button>
    </Form>
  )
}

interface PostActionButtonProps extends Props {
  formPayload: {
    postId: string
    [name: string]: string | number | readonly string[] | undefined
  }
}

export const PostActionButton: React.FC<PostActionButtonProps> = ({
  children,
  ...rest
}) => {
  return <ActionButton {...rest}>{children}</ActionButton>
}
