import React from "react"

type Props = {
  userName: string
}

const UserAvatar = (props: Props) => {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-3xl bg-blue-500 font-semibold text-white">
      {props.userName?.charAt(0).toUpperCase()}
    </div>
  )
}

export default UserAvatar
