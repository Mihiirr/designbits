import React from "react"

const BulletListIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M8 6a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM5 5a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1Zm0 6a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1Zm0 6a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V18a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default BulletListIcon
