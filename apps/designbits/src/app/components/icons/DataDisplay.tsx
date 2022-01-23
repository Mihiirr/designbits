import React from "react"

const DataDisplayIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12 11.992a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        d="M16.207 8.785a1 1 0 010 1.415l-2.05 2.05a1 1 0 01-1.414-1.415l2.05-2.05a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        d="M12 4.961a8 8 0 00-5.24 14.046h10.48a8 8 0 002.313-8.682A8 8 0 0012 4.96zm-5.79-.153a10 10 0 0112.012 15.981 1 1 0 01-.622.218H6.4a1 1 0 01-.622-.218A10 10 0 016.21 4.808z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default React.memo(DataDisplayIcon)
