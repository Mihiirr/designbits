import React from "react"

const ChatIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M9.586 2.586A2 2 0 0111 2h9a2 2 0 012 2v10a1 1 0 01-1.707.707L17.586 12H11a2 2 0 01-2-2V4a2 2 0 01.586-1.414zM20 4h-9v6h7a1 1 0 01.707.293L20 11.586V4z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        d="M2.586 9.593A2 2 0 014 9.007h2a1 1 0 010 2H4v7.586L5.293 17.3A1 1 0 016 17.007h7v-2a1 1 0 112 0v2a2 2 0 01-2 2H6.414l-2.707 2.708A1 1 0 012 21.008v-10a2 2 0 01.586-1.415z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default React.memo(ChatIcon)
