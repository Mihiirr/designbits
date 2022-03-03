import React from "react"

const BoldIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M6 5a1 1 0 0 1 1-1h6a4.5 4.5 0 1 1 0 9H7a1 1 0 0 1-1-1V5Zm2 1v5h5a2.5 2.5 0 0 0 0-5H8Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M7 11a1 1 0 0 1 1 1v6h6a2.5 2.5 0 0 0 0-5h-1a1 1 0 1 1 0-2h1a4.5 4.5 0 1 1 0 9H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default BoldIcon
