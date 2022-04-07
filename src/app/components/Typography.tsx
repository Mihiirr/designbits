import * as React from "react"
import clsx from "clsx"

type TitleProps = {
  variant?: "primary" | "secondary"
  as?: React.ElementType
} & React.HTMLAttributes<HTMLHeadingElement>

const fontSize = {
  h1: "leading-tight text-4xl md:text-5xl",
  h2: "leading-tight text-3xl md:text-4xl",
  h3: "text-2xl font-medium md:text-3xl",
  h4: "text-xl font-medium md:text-2xl",
  h5: "text-lg font-medium md:text-xl",
  h6: "text-lg font-medium",
}

const titleColors = {
  primary: "text-black",
  secondary: "text-gray-800",
}

const Title = React.forwardRef(function Title(
  {
    variant = "primary",
    size,
    as,
    className,
    ...rest
  }: TitleProps & { size: keyof typeof fontSize },
  ref,
) {
  const Tag = as ?? size
  return (
    <Tag
      ref={ref}
      className={clsx(fontSize[size], titleColors[variant], className)}
      {...rest}
    />
  )
})

const H1 = React.forwardRef(function H1(props: TitleProps, ref) {
  return <Title ref={ref} {...props} size="h1" />
})

const H2 = React.forwardRef(function H2(props: TitleProps, ref) {
  return <Title ref={ref} {...props} size="h2" />
})

const H3 = React.forwardRef(function H3(props: TitleProps, ref) {
  return <Title ref={ref} {...props} size="h3" />
})

const H4 = React.forwardRef(function H4(props: TitleProps, ref) {
  return <Title ref={ref} {...props} size="h4" />
})

const H5 = React.forwardRef(function H5(props: TitleProps, ref) {
  return <Title ref={ref} {...props} size="h5" />
})

const H6 = React.forwardRef(function H6(props: TitleProps, ref) {
  return <Title ref={ref} {...props} size="h6" />
})

type ParagraphProps = {
  className?: string
  prose?: boolean
  textColorClassName?: string
  as?: React.ElementType
} & (
  | { children: React.ReactNode }
  | { dangerouslySetInnerHTML: { __html: string } }
)

function Paragraph({
  className,
  prose = true,
  as = "p",
  textColorClassName = "text-blueGray-500",
  ...rest
}: ParagraphProps) {
  return React.createElement(as, {
    className: clsx(
      "max-w-full text-lg text-slate-500",
      textColorClassName,
      className,
      {
        prose: prose,
      },
    ),
    ...rest,
  })
}

export { H1, H2, H3, H4, H5, H6, Paragraph }
