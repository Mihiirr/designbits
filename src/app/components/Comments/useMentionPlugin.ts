import React, { useCallback, useLayoutEffect, useState } from "react"
import { ReactEditor } from "slate-react"
import { Editor, Range as SlateRange, Transforms } from "slate"
import { MentionElement } from "~/types/editor"

export default function useMentionPlugin(editor: Editor) {
  const [search, setSearch] = useState("")
  const [index, setIndex] = useState(0)
  const [target, setTarget] = useState<SlateRange | undefined>()
  const [popperTarget, setPopperTarget] = useState<Range | null>(null)

  const chars = CHARACTERS.filter(c =>
    c.toLowerCase().startsWith(search.toLowerCase()),
  ).slice(0, 10)

  const insertMention = useCallback((editor: Editor, character: string) => {
    const mention: MentionElement = {
      type: "mention",
      character,
      children: [{ text: "" }],
    }
    Transforms.insertNodes(editor, mention)
    Transforms.move(editor)
  }, [])

  useLayoutEffect(() => {
    if (target && chars.length > 0) {
      const domRange = ReactEditor.toDOMRange(editor, target)
      setPopperTarget(domRange)
    }
  }, [chars.length, editor, index, search, target])

  const showHideMentionDropdown = useCallback(
    value => {
      const { selection } = editor

      if (selection && SlateRange.isCollapsed(selection)) {
        const [start] = SlateRange.edges(selection)
        const wordBefore = Editor.before(editor, start, { unit: "word" })
        const before = wordBefore && Editor.before(editor, wordBefore)
        const beforeRange = before && Editor.range(editor, before, start)
        const beforeText = beforeRange && Editor.string(editor, beforeRange)
        const beforeMatch = beforeText && beforeText.match(/^@(\w+)$/)
        const after = Editor.after(editor, start)
        const afterRange = Editor.range(editor, start, after)
        const afterText = Editor.string(editor, afterRange)
        const afterMatch = afterText.match(/^(\s|$)/)

        if (beforeMatch && afterMatch) {
          setTarget(beforeRange)
          setSearch(beforeMatch[1])
          setIndex(0)
          return
        }
      }

      setTarget(undefined)
    },
    [editor],
  )

  const handleMentionItemClick = useCallback(
    index => {
      if (target) {
        Transforms.select(editor, target)
        insertMention(editor, chars[index])
        setTarget(undefined)
        ReactEditor.focus(editor)
      }
    },
    [chars, editor, insertMention, target],
  )

  const handleArrowNavigation = useCallback(
    (event: React.KeyboardEvent, target) => {
      if (target) {
        switch (event.key) {
          case "ArrowDown":
            event.preventDefault()
            const prevIndex = index >= chars.length - 1 ? 0 : index + 1
            setIndex(prevIndex)
            break
          case "ArrowUp":
            event.preventDefault()
            const nextIndex = index <= 0 ? chars.length - 1 : index - 1
            setIndex(nextIndex)
            break
          case "Tab":
          case "Enter":
            event.preventDefault()
            Transforms.select(editor, target)
            insertMention(editor, chars[index])
            setTarget(undefined)
            break
          case "Escape":
            event.preventDefault()
            setTarget(undefined)
            break
        }
      }
    },
    [chars, editor, index, insertMention],
  )

  return {
    search,
    index,
    target,
    showHideMentionDropdown,
    handleArrowNavigation,
    handleMentionItemClick,
    chars,
    popperTarget,
  }
}

const CHARACTERS = [
  "Shreyas Chaudhary",
  "Parag Chauhan",
  "Sachin Tendulkar",
  "Tirth Gajjar",
]
