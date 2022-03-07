import clsx from "clsx"
import {
  RenderElementProps,
  RenderLeafProps,
  useFocused,
  useSelected,
} from "slate-react"
import { RenderMentionProps } from "~/types/editor"

export const Element = (props: RenderElementProps) => {
  const { element, attributes, children } = props

  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>
    case "heading":
      return <h3 {...attributes}>{children}</h3>
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>
    case "list-item":
      return <li {...attributes}>{children}</li>
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>
    case "mention":
      return <Mention {...props} />
    default:
      return <p {...attributes}>{children}</p>
  }
}

export const Leaf = (props: RenderLeafProps) => {
  const { attributes, children, leaf } = props

  let wrappedChildren = children
  if (leaf.bold) {
    wrappedChildren = <strong>{wrappedChildren}</strong>
  }

  if (leaf.code) {
    wrappedChildren = <code>{wrappedChildren}</code>
  }

  if (leaf.italic) {
    wrappedChildren = <em>{wrappedChildren}</em>
  }

  if (leaf.underline) {
    wrappedChildren = <u>{wrappedChildren}</u>
  }

  return <span {...attributes}>{wrappedChildren}</span>
}

export const Mention = (props: RenderElementProps) => {
  const { attributes, children, element } = props as RenderMentionProps
  const selected = useSelected()
  const focused = useFocused()
  return (
    <span
      {...attributes}
      contentEditable={false}
      data-cy={`mention-${element.name.replace(" ", "-")}`}
      className={clsx(
        "mx-1 my-0 inline-block rounded-sm  px-1 py-0.5 text-sm text-gray-700 ring-indigo-500 transition-colors hover:bg-indigo-200",
        selected && focused
          ? "bg-indigo-100/80 shadow shadow-indigo-400 ring-2 ring-indigo-500 focus:outline"
          : "bg-indigo-100/50 ring-1",
      )}
    >
      @{element.name}
      {children}
    </span>
  )
}
