import React from "react"
import { Form } from "remix"
import { CARD_ACTIONS } from "./InteractionCard"

type Props = {
  postId: string
  value: CARD_ACTIONS
}

const InteractionCardBtn: React.FC<Props> = ({ postId, value, children }) => {
  return (
    <Form method="post">
      <input type="hidden" name="postId" value={postId} />
      <button
        type="submit"
        name="_action"
        value={value}
        className="flex items-center py-0.5 px-1 space-x-1 hover:text-indigo-500 focus:text-indigo-500 hover:bg-indigo-50 focus:bg-indigo-50 rounded-sm"
      >
        {children}
      </button>
    </Form>
  )
}

export default InteractionCardBtn
