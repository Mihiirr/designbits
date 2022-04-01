import React from "react"

const ReplyIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M7.99 2.15c.31-.3.73-.48 1.18-.48h7.5a1.67 1.67 0 0 1 1.66 1.66v8.34a.83.83 0 0 1-1.42.59L14.65 10H9.17A1.67 1.67 0 0 1 7.5 8.33v-5c0-.44.18-.86.49-1.18Zm8.68 1.18h-7.5v5H15c.22 0 .43.1.59.25l1.08 1.07V3.33Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M2.15 8c.32-.32.74-.5 1.18-.5H5a.83.83 0 0 1 0 1.67H3.33v6.32l1.08-1.07a.83.83 0 0 1 .59-.25h5.83v-1.66a.83.83 0 0 1 1.67 0v1.66a1.67 1.67 0 0 1-1.67 1.67H5.35L3.09 18.1a.83.83 0 0 1-1.42-.6V9.18c0-.44.17-.86.48-1.18Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default ReplyIcon
