import React from "react"

const ItalicIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1ZM6 19a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M14.27 4.03a1 1 0 0 1 .7 1.24l-4 14a1 1 0 0 1-1.93-.55l4-14a1 1 0 0 1 1.23-.69Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default ItalicIcon
