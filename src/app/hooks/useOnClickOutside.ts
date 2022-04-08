import { RefObject } from "react"
import { useEventListener } from "usehooks-ts"

type Handler = (event: MouseEvent) => void

function useOnClickOutside(
  ref: RefObject<any>[],
  handler: Handler,
  mouseEvent: "mousedown" | "mouseup" = "mousedown",
): void {
  useEventListener(mouseEvent, event => {
    const shouldSkipHandle = ref.some(ref => {
      const el = ref?.current

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(event.target as Node)) {
        return true
      }
      return false
    })

    if (!shouldSkipHandle) {
      handler(event)
    }
  })
}

export default useOnClickOutside
