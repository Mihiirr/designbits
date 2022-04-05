import { AnimatePresence } from "framer-motion"
import isHotkey from "is-hotkey"
import React, { useMemo, useCallback, useState, useRef } from "react"
import { useOnClickOutside } from "usehooks-ts"
import {
  createEditor,
  Descendant,
  BaseElement,
  Editor,
  Element as SlateElement,
} from "slate"
import { withHistory } from "slate-history"
import { Slate, Editable, withReact, RenderElementProps } from "slate-react"
import { MentionElement } from "~/types/editor"
import { Element, Leaf } from "./Elements"
import MentionsDropdown from "./MentionsDropdown"
import { MarksFormat, toggleMark } from "./Toolbar"
import useMentionPlugin from "./useMentionPlugin"
import { useLocalStorage } from "usehooks-ts"
import { PostActionButton } from "../ActionButton"
import { COMMENT_ACTIONS } from "~/utils/constants"
import { isEqual } from "lodash"

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+e": "code",
}

const MentionExample: React.FC<{
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
  uniqueKey: string
  postId: string
  parentCommentId?: string | null
}> = ({ setIsEditing, uniqueKey, postId, parentCommentId = null }) => {
  const [savedCommentFromLS, saveCommentToLS] = useLocalStorage<
    (Descendant | MentionElement)[]
  >(`comment-${uniqueKey}`, initialValue)

  const ref = useRef(null)

  const [value, setValue] = useState<(Descendant | MentionElement)[]>(
    savedCommentFromLS || initialValue,
  )

  const renderElement = useCallback(
    (props: RenderElementProps) => <Element {...props} />,
    [],
  )
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])

  const editor = useMemo(
    () => withMentions(withReact(withHistory(createEditor()))),
    [],
  )

  const handleClickOutside = useCallback(() => {
    setIsEditing(false)
  }, [setIsEditing])

  const {
    index,
    target,
    showHideMentionDropdown,
    handleArrowNavigation,
    handleMentionItemClick,
    chars,
    popperTarget,
  } = useMentionPlugin(editor)

  useOnClickOutside(ref, handleClickOutside)

  const onKeyDown = useCallback(
    event => {
      for (const [key, format] of Object.entries(HOTKEYS)) {
        if (isHotkey(key, event as any)) {
          event.preventDefault()
          toggleMark(editor, format as MarksFormat)
        }
      }
      handleArrowNavigation(event, target)
    },
    [handleArrowNavigation, target, editor],
  )

  const onChange = useCallback(
    value => {
      setValue(value)
      showHideMentionDropdown(value)

      const isAstChange = editor.operations.some(
        op => "set_selection" !== op.type,
      )
      if (isAstChange) {
        saveCommentToLS(value)
      }
    },
    [editor.operations, saveCommentToLS, showHideMentionDropdown],
  )

  return (
    <div className="w-full" ref={ref}>
      <Slate editor={editor} value={value} onChange={onChange}>
        <div className="block w-full rounded-md py-2 px-3 text-sm text-gray-700 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
          {/* <Toolbar /> */}
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={onKeyDown}
            placeholder="Add a comment..."
            spellCheck
            autoFocus={true}
            className="prose prose-sm prose-p:my-1 prose-p:first:my-0 prose-code:mx-1 prose-code:rounded-sm prose-code:bg-indigo-200/50 prose-code:px-1 prose-code:py-1.5 prose-code:before:content-none prose-code:after:content-none"
            onFocus={() => setIsEditing(true)}
          />
        </div>
        <AnimatePresence>
          {target && chars.length > 0 && (
            <MentionsDropdown
              handleMentionItemClick={handleMentionItemClick}
              chars={chars}
              index={index}
              referenceElement={popperTarget}
            />
          )}
        </AnimatePresence>
      </Slate>
      <div className="my-4 flex space-x-3">
        <PostActionButton
          actionName={COMMENT_ACTIONS.CREATE_COMMENT}
          formPayload={{
            postId: postId,
            comment: JSON.stringify(value),
            ...(parentCommentId ? { parentCommentId } : {}),
          }}
          btnProps={{
            disabled: isEqual(value, initialValue),
            className:
              "disabled:opacity-50 flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1",
          }}
        >
          Send
        </PostActionButton>
        <button
          onClick={handleClickOutside}
          className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

function isMentionElement(
  element: MentionElement | BaseElement,
): element is MentionElement {
  return (element as MentionElement).type === "mention"
}

const withMentions = (editor: Editor) => {
  const { isInline, isVoid } = editor

  editor.isInline = (element: SlateElement) => {
    return isMentionElement(element) ? true : isInline(element)
  }

  editor.isVoid = (element: SlateElement) => {
    return isMentionElement(element) ? true : isVoid(element)
  }

  return editor
}

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [
      {
        text: "",
      },
    ],
  },
]

export default MentionExample
