import { Except } from "type-fest"
import { CARD_ACTIONS, COMMENT_ACTIONS } from "~/utils/constants"

export type ParsedFormData = {
  [key: string]: FormDataEntryValue
}

export type CardActionFormData = ParsedFormData & {
  _action: CARD_ACTIONS | COMMENT_ACTIONS
}

export type StrictExclude<T, K extends keyof T> = Except<T, K> &
  Partial<Record<K, never>>
