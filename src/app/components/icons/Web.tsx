import React from "react"

const WebIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      {...props}
    >
      <path
        fill-rule="evenodd"
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M2.6 9a1 1 0 0 1 1-1h16.8a1 1 0 1 1 0 2H3.6a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h16.8a1 1 0 1 1 0 2H3.6a1 1 0 0 1-1-1Z"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M12.03 2.15a1 1 0 0 1 .32 1.38 16 16 0 0 0 0 16.94 1 1 0 1 1-1.7 1.06 18 18 0 0 1 0-19.06 1 1 0 0 1 1.38-.32Z"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M11.97 2.15a1 1 0 0 1 1.38.32 18 18 0 0 1 0 19.06 1 1 0 1 1-1.7-1.06 16 16 0 0 0 0-16.94 1 1 0 0 1 .32-1.38Z"
        clip-rule="evenodd"
      />
    </svg>
  )
}

export default WebIcon
