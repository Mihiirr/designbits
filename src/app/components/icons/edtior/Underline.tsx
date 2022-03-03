import React from "react"

const UnderlineIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1ZM8 4a1 1 0 0 1 1 1v6a3 3 0 0 0 6 0V5a1 1 0 1 1 2 0v6a5 5 0 0 1-10 0V5a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default UnderlineIcon
