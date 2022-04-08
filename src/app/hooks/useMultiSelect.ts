import { useKeyPress } from "ahooks"
import { useEffect, useReducer, useRef } from "react"
import { useBoolean } from "usehooks-ts"
import useOnClickOutside from "./useOnClickOutside"

export type Option = {
  id: string
  label: string
}

export type SelectedOptions = {
  [optionId: string]: boolean
}
// An enum with all the types of actions to use in our reducer
enum SelectionActionType {
  SELECT_OPTION = "SELECT_OPTION",
  DESELECT_OPTION = "DESELECT_OPTION",
  SET_OPTION_ACTIVE = "SET_OPTION_ACTIVE",
  RESET_SELECTION = "RESET_SELECTION",
}

// An interface for our actions
type SelectionAction =
  | {
      type:
        | SelectionActionType.SELECT_OPTION
        | SelectionActionType.DESELECT_OPTION
      optionId: string
    }
  | {
      type: SelectionActionType.SET_OPTION_ACTIVE
      optionIndex: number
    }
  | {
      type: SelectionActionType.RESET_SELECTION
    }

// An interface for our state
interface SelectionState {
  selectedOptions: SelectedOptions
  activeOptionIndex: number
}

// Our reducer function that uses a switch statement to handle our actions
function selectionReducer(state: SelectionState, action: SelectionAction) {
  const { type } = action
  switch (type) {
    case SelectionActionType.SELECT_OPTION:
      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          [action.optionId]: true,
        },
      }
    case SelectionActionType.DESELECT_OPTION:
      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          [action.optionId]: false,
        },
      }

    case SelectionActionType.RESET_SELECTION:
      return {
        ...state,
        selectedOptions: {},
      }
    case SelectionActionType.SET_OPTION_ACTIVE:
      return {
        ...state,
        activeOptionIndex: action.optionIndex,
      }
    default:
      return state
  }
}

export function useMultiSelect(
  options: Option[],
  initSelectedOptions: SelectedOptions,
  onChange: (
    targetOption: Option | undefined,
    action: "ADDED_TO_SELECTION" | "REMOVED_FROM_SELECTION" | "RESET_SELECTION",
    selectedOptions: SelectedOptions,
  ) => void,
) {
  const optionsRefs = useRef<{ [key: string]: HTMLLIElement | null }>({})
  const ulRef = useRef<HTMLUListElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  const {
    value: isListBoxOpen,
    setFalse: closeListBox,
    setTrue: openListBox,
    toggle: toggleListBoxOpen,
  } = useBoolean(false)
  const [{ selectedOptions, activeOptionIndex }, dispatch] = useReducer(
    selectionReducer,
    {
      selectedOptions: initSelectedOptions,
      activeOptionIndex: 0,
    },
  )

  const addOptionToSelection = (option: Option) => {
    dispatch({ type: SelectionActionType.SELECT_OPTION, optionId: option.id })
    onChange(option, "ADDED_TO_SELECTION", {
      ...selectedOptions,
      [option.id]: true,
    })
  }

  const removeOptionFromSelection = (option: Option) => {
    dispatch({ type: SelectionActionType.DESELECT_OPTION, optionId: option.id })
    onChange(option, "REMOVED_FROM_SELECTION", {
      ...selectedOptions,
      [option.id]: false,
    })
  }

  const resetSelection = () => {
    dispatch({ type: SelectionActionType.RESET_SELECTION })
    onChange(undefined, "RESET_SELECTION", {})
  }

  const setActiveOptionIndex = (optionIndex: number) =>
    dispatch({ type: SelectionActionType.SET_OPTION_ACTIVE, optionIndex })

  useKeyPress(
    ["uparrow", "shift.tab"],
    event => {
      event.preventDefault()
      setActiveOptionIndex(activeOptionIndex > 0 ? activeOptionIndex - 1 : 0)
    },
    {
      target: ulRef,
      exactMatch: true,
    },
  )

  useKeyPress(
    ["downarrow", "tab"],
    event => {
      event.preventDefault()
      setActiveOptionIndex(
        activeOptionIndex < options.length - 1
          ? activeOptionIndex + 1
          : options.length - 1,
      )
    },
    {
      target: ulRef,
      exactMatch: true,
    },
  )

  useKeyPress(
    "enter",
    event => {
      event.preventDefault()
      const option = options[activeOptionIndex]
      const isSelected = selectedOptions[option.id] || false
      isSelected
        ? removeOptionFromSelection(option)
        : addOptionToSelection(option)
    },
    {
      target: ulRef,
    },
  )

  useKeyPress(
    "esc",
    event => {
      closeListBox()
      btnRef.current?.focus()
    },
    {
      target: ulRef,
    },
  )
  useKeyPress(
    "downarrow",
    event => {
      openListBox()
    },
    {
      target: btnRef,
    },
  )

  useEffect(() => {
    if (isListBoxOpen) {
      ulRef.current?.focus()
    }
  }, [isListBoxOpen, ulRef])

  useOnClickOutside([btnRef, ulRef], () => {
    closeListBox()
  })

  return {
    addOptionToSelection,
    removeOptionFromSelection,
    resetSelection,
    selectedOptions,
    isListBoxOpen,
    closeListBox,
    toggleListBoxOpen,
    activeOptionIndex,
    setActiveOptionIndex,
    ulRef,
    btnRef,
    optionsRefs,
  }
}
