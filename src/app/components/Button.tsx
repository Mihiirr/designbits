import React from "react"

const variantProps = {
  primary: {
    className:
      "inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed",
  },
  secondary: {
    className:
      "inline-flex w-full items-center justify-center shadow-md py-2 px-4 text-sm font-medium text-gray-800 bg-gray-50 hover:bg-slate-100 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-gary-200 focus:ring-offset-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed",
  },
}

const Button: React.FC<
  Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "className"
  > & {
    variant?: keyof typeof variantProps
  }
> = ({ children, variant = "primary", ...btnProps }) => {
  return (
    <button type="button" {...variantProps[variant]} {...btnProps}>
      {children}
    </button>
  )
}

export default Button
