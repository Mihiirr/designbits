import React from "react"

const FilterIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4.3 3.37a.83.83 0 0 1 .28-.04h10.84c.1 0 .18.01.27.04a1.67 1.67 0 0 1 .76 2.6l-3.95 4.35v5.5a.83.83 0 0 1-1.33.67L7.83 14a.83.83 0 0 1-.33-.66v-3.01L3.55 5.97a1.67 1.67 0 0 1 .76-2.6ZM4.92 5l4.04 4.44c.14.16.22.36.22.56v2.92l1.66 1.25V9.99c0-.2.08-.4.22-.56L15.09 5H4.9Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default FilterIcon
