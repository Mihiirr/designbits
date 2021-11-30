import React from "react"

const ToggleIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M8 11.007a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        d="M8 7a5 5 0 000 10h8a5 5 0 000-10H8zm-7 5a7 7 0 017-7h8a7 7 0 110 14H8a7 7 0 01-7-7z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default React.memo(ToggleIcon)
