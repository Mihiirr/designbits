import React, { ButtonHTMLAttributes, useCallback } from "react"
import { Form } from "remix"
import { Except } from "type-fest"
import { useRootContext } from "~/context/root-context"
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
  requiresLogin?: boolean
}

export const PostActionButton: React.FC<PostActionButtonProps> = ({
  children,
  btnProps,
  requiresLogin = true,
  ...rest
}) => {
  const {
    rootState: { user, isAuthModalOpen },
    openAuthModal,
  } = useRootContext()

  const isLoggedIn = requiresLogin && !!user

  const onClickHandler = useCallback(() => {
    console.log("setting modal open")
    if (!isLoggedIn && !isAuthModalOpen) {
      openAuthModal()
    }
  }, [isLoggedIn, isAuthModalOpen, openAuthModal])

  return isLoggedIn ? (
    <ActionButton btnProps={btnProps} {...rest}>
      {children}
    </ActionButton>
  ) : (
    <button
      onClick={onClickHandler}
      className="flex items-center space-x-1 rounded-sm py-0.5 px-1 hover:bg-indigo-50 hover:text-indigo-500 focus:bg-indigo-50 focus:text-indigo-500"
    >
      {children}
    </button>
  )
}
