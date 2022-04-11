import React, { HTMLAttributes } from "react"

type ButtonSizes = "LARGE" | "MEDIUM" | "SMALL"

interface Props extends HTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<any>
  size: ButtonSizes
}

const LargeVariantStyles = {
  spacing: "px-5 py-2",
  text: "text-base font-normal leading-normal",
  background: "bg-indigo-700 text-white",
  border: "rounded border border-transparent",
  outline: "outline outline-offset-0",
  hover: "hover:bg-indigo-900",
  focus: "focus:border-indigo-900 focus:outline-indigo-300",
  active: "active:border-indigo-900 active:bg-indigo-900 active:outline-2",
  disabled: "disabled:bg-opacity-50 disabled:opacity-50",
}

const Button: React.FC<Props> = ({ children, ...rest }: Props) => {
  return (
    <button className={Object.values(LargeVariantStyles).join(" ")} {...rest}>
      {children}
    </button>
  )
}

export default Button
