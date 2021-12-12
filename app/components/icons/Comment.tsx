import React from "react"

const CommentIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.667 3.995a1.333 1.333 0 0 0-1.334 1.333v7.058l1.529-1.53a.667.667 0 0 1 .471-.194h6a1.333 1.333 0 0 0 1.334-1.334v-4a1.333 1.333 0 0 0-1.334-1.333H4.667ZM2.78 3.443c.5-.5 1.178-.781 1.886-.781h6.666A2.667 2.667 0 0 1 14 5.328v4a2.667 2.667 0 0 1-2.667 2.667H5.61l-2.47 2.471A.667.667 0 0 1 2 13.995V5.328c0-.707.28-1.385.781-1.885Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.667 6c0-.368.298-.667.666-.667h5.334a.667.667 0 1 1 0 1.334H5.333A.667.667 0 0 1 4.667 6ZM4.667 8.672c0-.369.298-.667.666-.667h4a.667.667 0 0 1 0 1.333h-4a.667.667 0 0 1-.666-.666Z"
      />
    </svg>
  )
}

export default React.memo(CommentIcon)
