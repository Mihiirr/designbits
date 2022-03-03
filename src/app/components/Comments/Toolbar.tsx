import clsx from "clsx"
import React from "react"
import { Editor, Transforms, Element as SlateElement } from "slate"
import { useSlate } from "slate-react"
import BlockquoteIcon from "../icons/edtior/Blockquote"
import BoldIcon from "../icons/edtior/Bold"
import BulletListIcon from "../icons/edtior/BulletList"
import CodeIcon from "../icons/edtior/Code"
import H1Icon from "../icons/edtior/H1"
import H2Icon from "../icons/edtior/H2"
import ItalicIcon from "../icons/edtior/Italic"
import NumberedListIcon from "../icons/edtior/NumberedList"
import UnderlineIcon from "../icons/edtior/Underline"

const LIST_TYPES = ["numbered-list", "bulleted-list"]

export type MarksFormat = "bold" | "italic" | "underline" | "code"

export type BlockFormat = SlateElement["type"]

const isBlockActive = (editor: Editor, format: BlockFormat) => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    }),
  )

  return !!match
}

const isMarkActive = (editor: Editor, format: MarksFormat) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const toggleBlock = (editor: Editor, format: BlockFormat) => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type),
    split: true,
  })
  const newProperties: Partial<SlateElement> = {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
  }
  Transforms.setNodes<SlateElement>(editor, newProperties)

  if (!isActive && isList) {
    const block = { type: format, children: [] } as SlateElement
    Transforms.wrapNodes(editor, block)
  }
}

export const toggleMark = (editor: Editor, format: MarksFormat) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}
type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive: boolean
}

const IconButton: React.FC<IconButtonProps> = ({
  isActive,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        isActive
          ? "border-gray-200 bg-gray-50 text-gray-800"
          : "border-gray-50 bg-white text-gray-400",
        "rounded-md border p-1.5 shadow-sm",
      )}
    >
      {children}
    </button>
  )
}

type ToolbarButtonProps = {
  format: BlockFormat | MarksFormat
  icon: JSX.Element
}

export const BlockButton: React.FC<ToolbarButtonProps> = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <IconButton
      isActive={isBlockActive(editor, format as BlockFormat)}
      onMouseDown={event => {
        event.preventDefault()
        toggleBlock(editor, format as BlockFormat)
      }}
    >
      {icon}
    </IconButton>
  )
}

export const MarkButton: React.FC<ToolbarButtonProps> = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <IconButton
      isActive={isMarkActive(editor, format as MarksFormat)}
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format as MarksFormat)
      }}
    >
      {icon}
    </IconButton>
  )
}

export const Toolbar = () => {
  return (
    <div className="block space-x-2">
      <MarkButton
        format="bold"
        icon={<BoldIcon height="18" width="18" role="presentation" />}
      />
      <MarkButton
        format="italic"
        icon={<ItalicIcon height="18" width="18" role="presentation" />}
      />
      <MarkButton
        format="underline"
        icon={<UnderlineIcon height="18" width="18" role="presentation" />}
      />
      <MarkButton
        format="code"
        icon={<CodeIcon height="18" width="18" role="presentation" />}
      />
      <BlockButton
        format="heading"
        icon={<H1Icon height="18" width="18" role="presentation" />}
      />
      <BlockButton
        format="heading-two"
        icon={<H2Icon height="18" width="18" role="presentation" />}
      />
      <BlockButton
        format="block-quote"
        icon={<BlockquoteIcon height="18" width="18" role="presentation" />}
      />
      <BlockButton
        format="numbered-list"
        icon={<NumberedListIcon height="18" width="18" role="presentation" />}
      />
      <BlockButton
        format="bulleted-list"
        icon={<BulletListIcon height="18" width="18" role="presentation" />}
      />
    </div>
  )
}
