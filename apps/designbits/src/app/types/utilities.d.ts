import { Except } from "type-fest"

export type StrictExclude<T, K extends keyof T> = Except<T, K> &
  Partial<Record<K, never>>
