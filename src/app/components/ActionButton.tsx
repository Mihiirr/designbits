import React, { ButtonHTMLAttributes, useCallback } from "react"
import { Form } from "remix"
import { Except } from "type-fest"

import { CARD_ACTIONS, COMMENT_ACTIONS } from "~/utils/constants"

type BtnProps = Except<ButtonHTMLAttributes<HTMLButtonElement>, "type">
type Props = {
  formPayload: {
    [name: string]: string | number | readonly string[] | undefined
  }
  actionName: CARD_ACTIONS | COMMENT_ACTIONS
  btnProps: BtnProps
}

export const ActionButton: React.FC<Props> = ({
  formPayload,
  actionName,
  children,
  btnProps,
}) => {
  return (
    <Form method="post">
      {Object.entries(formPayload).map(([key, value]) => (
        <input type="hidden" name={key} value={value} key={key} />
      ))}
      <input type="hidden" name="_action" value={actionName} />
      <button type="submit" {...btnProps}>
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
  btnProps,
  ...rest
}) => {
  return (
    <ActionButton btnProps={btnProps} {...rest}>
      {children}
    </ActionButton>
  )
}
