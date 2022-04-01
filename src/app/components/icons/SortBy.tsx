import React from "react"

const iOSIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        fill-rule="evenodd"
        d="M2.5 5c0-.46.37-.83.83-.83h7.5a.83.83 0 1 1 0 1.66h-7.5A.83.83 0 0 1 2.5 5Zm0 5c0-.46.37-.83.83-.83h5.84a.83.83 0 0 1 0 1.66H3.33A.83.83 0 0 1 2.5 10Zm0 5c0-.46.37-.83.83-.83h5.84a.83.83 0 0 1 0 1.66H3.33A.83.83 0 0 1 2.5 15Zm9.41-3.09a.83.83 0 0 1 1.18 0L15 13.82l1.91-1.9a.83.83 0 0 1 1.18 1.17l-2.5 2.5a.83.83 0 0 1-1.18 0l-2.5-2.5a.83.83 0 0 1 0-1.18Z"
        clipRule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M15 4.17c.46 0 .83.37.83.83v10a.83.83 0 0 1-1.66 0V5c0-.46.37-.83.83-.83Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default iOSIcon
