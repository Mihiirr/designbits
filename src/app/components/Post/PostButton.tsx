import React, { ButtonHTMLAttributes, HTMLAttributes } from "react"
import { Form } from "remix"
import { Except } from "type-fest"
import { CARD_ACTIONS } from "./InteractionCard"

type Props = {
  postId: string
  value: CARD_ACTIONS
  btnProps: Except<ButtonHTMLAttributes<HTMLButtonElement>, "type">
}

const InteractionCardBtn: React.FC<Props> = ({
  postId,
  value,
  children,
  btnProps,
}) => {
  return (
    <Form method="post">
      <input type="hidden" name="postId" value={postId} />
      <input type="hidden" name="_action" value={value} />
      <button type="submit" {...btnProps}>
        {children}
      </button>
    </Form>
  )
}

export default InteractionCardBtn
