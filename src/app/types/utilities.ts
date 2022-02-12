import { Except } from "type-fest"
import { CARD_ACTIONS } from "~/components/Post/InteractionCard"

export type ParsedFormData = {
  [key: string]: FormDataEntryValue
}

export type ActionFormData = ParsedFormData & {
  _action: CARD_ACTIONS
}

export type StrictExclude<T, K extends keyof T> = Except<T, K> &
  Partial<Record<K, never>>
