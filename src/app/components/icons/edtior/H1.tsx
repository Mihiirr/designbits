import React from "react"

const H1Icon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M11 7h2v10h-2v-4H7v4H5V7h2v4h4V7zm6.57 0A4.74 4.74 0 0 1 15 9v1h2v7h2V7h-1.43z" />
    </svg>
  )
}

export default H1Icon
