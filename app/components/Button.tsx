import React from "react"

const Button: React.FC<
  Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "className" | "type"
  >
> = ({ children, ...btnProps }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 text-white text-sm font-medium bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-md focus:outline-none shadow-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      {...btnProps}
    >
      {children}
    </button>
  )
}

export default Button
