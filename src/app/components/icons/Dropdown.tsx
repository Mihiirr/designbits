import React from "react"

const DropdownIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M12 8.996a1 1 0 011 1v10a1 1 0 11-2 0v-10a1 1 0 011-1z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        d="M16.707 15.29a1 1 0 010 1.413l-4 4a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        d="M7.293 15.29a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.413l-4-4a1 1 0 010-1.414zM3 3.996a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default React.memo(DropdownIcon)
