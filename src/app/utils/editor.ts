import { Descendant } from "slate"
import { CustomElement, MentionElement } from "~/types/editor"

export function isMentionElement(
  element: Descendant,
): element is MentionElement {
  return (element as MentionElement).type === "mention"
}

export function isCustomElement(element: Descendant): element is CustomElement {
  return (element as CustomElement).type !== undefined
}
