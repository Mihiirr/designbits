import { Descendant, BaseEditor } from "slate"
import { ReactEditor, RenderElementProps } from "slate-react"
import { HistoryEditor } from "slate-history"
import { Get } from "type-fest"
import { User } from "@prisma/client"

export type BlockQuoteElement = { type: "block-quote"; children: Descendant[] }

export type BulletedListElement = {
  type: "bulleted-list"
  children: Descendant[]
}

export type NumberedListElement = {
  type: "numbered-list"
  children: Descendant[]
}

export type CheckListItemElement = {
  type: "check-list-item"
  checked: boolean
  children: Descendant[]
}

export type EditableVoidElement = {
  type: "editable-void"
  children: EmptyText[]
}

export type HeadingElement = { type: "heading"; children: Descendant[] }

export type HeadingTwoElement = { type: "heading-two"; children: Descendant[] }

export type ImageElement = {
  type: "image"
  url: string
  children: EmptyText[]
}

export type LinkElement = { type: "link"; url: string; children: Descendant[] }

export type ButtonElement = { type: "button"; children: Descendant[] }

export type ListItemElement = { type: "list-item"; children: Descendant[] }

export type MentionElement = {
  type: "mention"
  name: string
  userId: Get<User, "id">
  children: CustomText[]
}

export type RenderMentionProps = Omit<RenderElementProps, "element"> & {
  element: MentionElement
}

export type ParagraphElement = { type: "paragraph"; children: Descendant[] }

// export type TableElement = { type: "table"; children: TableRow[] }

// export type TableCellElement = { type: "table-cell"; children: CustomText[] }

// export type TableRowElement = { type: "table-row"; children: TableCell[] }

// export type TitleElement = { type: "title"; children: Descendant[] }

// export type VideoElement = { type: "video"; url: string; children: EmptyText[] }

type CustomElement =
  | BlockQuoteElement
  | BulletedListElement
  | NumberedListElement
  | CheckListItemElement
  | EditableVoidElement
  | HeadingElement
  | HeadingTwoElement
  | ImageElement
  | LinkElement
  | ButtonElement
  | ListItemElement
  | MentionElement
  | ParagraphElement
//   | TableElement
//   | TableRowElement
//   | TableCellElement
//   | TitleElement
//   | VideoElement

export type CustomText = {
  bold?: boolean
  italic?: boolean
  code?: boolean
  underline?: boolean
  text: string
}

export type EmptyText = {
  text: string
}

export interface RenderLeafProps {
  children: any
  leaf: CustomText | EmptyText
  text: CustomText | EmptyText
  attributes: {
    "data-slate-leaf": true
  }
}

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor
    Element: CustomElement
    Text: CustomText
    RenderLeafProps: RenderLeafProps
  }
}
declare module "slate-react" {
  interface CustomTypes {
    RenderLeafProps: RenderLeafProps
  }
}
