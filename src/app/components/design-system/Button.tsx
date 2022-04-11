import clsx from "clsx"
import React, { HTMLAttributes } from "react"
import { Link } from "remix"

type ButtonSizes = "large" | "medium" | "small"
type Rounded = "regular" | "full"

type CommonProps<T extends HTMLElement> = {
  icon?: React.ComponentType<any>
  size?: ButtonSizes
  rounded?: Rounded
} & HTMLAttributes<T>

type ButtonElementProps = CommonProps<HTMLButtonElement> & {
  type?: "primary" | "outline" | "ghost"
}

type AnchorElementProps = CommonProps<HTMLAnchorElement> & {
  type: "link"
  href: string
}

type Props = ButtonElementProps | AnchorElementProps

const TypeVariants: {
  [type in NonNullable<Props["type"]>]: Record<string, string>
} = {
  primary: {
    background: "bg-indigo-700 text-white",
    outline: "outline outline-[3px] outline-offset-0",
    hover: "hover:bg-indigo-900",
    active: "active:border-indigo-900 active:bg-indigo-900 active:outline-2",
    focus: "focus:border-indigo-900 focus:outline-indigo-300",
  },
  outline: {
    background: "bg-white text-indigo-700",
    outline: "outline outline-1 outline-offset-0",
    hover: "hover:bg-indigo-900 hover:text-white",
    active: "active:border-indigo-900 active:bg-indigo-900 active:outline-2",
    focus: "focus:border-indigo-900 focus:outline-indigo-300",
  },
  ghost: {
    background: "bg-white text-indigo-700",
    hover: "hover:bg-indigo-50",
    active:
      "active:outline outline-offset-0 active:bg-indigo-50 active:outline-2",
    focus: "focus:outline-indigo-300 focus:bg-indigo-50",
  },
  link: {
    background: "text-gray-900",
    hover: "hover:text-indigo-700",
    active:
      "active:text-indigo-700 active:outline outline-offset-0 active:outline-2",
    focus: "focus:outline-indigo-300",
  },
}

const SizeVariantStyles: {
  [size in ButtonSizes]: Record<string, string>
} = {
  large: {
    spacing: "px-5 py-2",
    text: "text-base font-medium leading-normal",
    disabled: "disabled:bg-opacity-50 disabled:opacity-50",
  },
  medium: {
    spacing: "px-5 py-2",
    text: "text-base font-normal leading-normal",
    disabled: "disabled:bg-opacity-50 disabled:opacity-50",
  },
  small: {
    spacing: "px-5 py-2",
    text: "text-base font-normal leading-normal",
    disabled: "disabled:bg-opacity-50 disabled:opacity-50",
  },
}

const RoundedVariantStyles: {
  [rounded in Rounded]: Record<string, string>
} = {
  regular: {
    border: "rounded border border-transparent",
  },
  full: {
    border: "rounded-full border border-transparent",
  },
}

const isLink = (props: Props): props is AnchorElementProps => {
  return props.type === "link"
}

const Button: React.FC<Props> = (props: Props) => {
  const {
    children,
    size = "medium",
    rounded = "regular",
    type = "primary",
  } = props
  const sizeStyles = SizeVariantStyles[size]
  const borderStyles = RoundedVariantStyles[rounded]
  const typeStyles = TypeVariants[type]

  if (isLink(props)) {
    return (
      <a
        className={clsx(
          Object.values({ ...sizeStyles, ...borderStyles, ...typeStyles }),
        )}
        {...props}
      >
        {children}
      </a>
    )
  }

  const { type: htmlButtonType, ...rest } = props

  return (
    <button
      className={clsx(
        Object.values({ ...sizeStyles, ...borderStyles, ...typeStyles }),
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
