import React from "react"

const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M7.7 7.29a1 1 0 0 1 0 1.41L4.42 12l3.3 3.29A1 1 0 0 1 6.3 16.7l-4-4a1 1 0 0 1 0-1.41l4-4a1 1 0 0 1 1.42 0Zm8.6 0a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.41l-4 4a1 1 0 0 1-1.4-1.41l3.29-3.3-3.3-3.29a1 1 0 0 1 0-1.41Zm-2.06-4.25a1 1 0 0 1 .73 1.21l-4 16a1 1 0 0 1-1.94-.49l4-16a1 1 0 0 1 1.21-.72Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default CodeIcon
