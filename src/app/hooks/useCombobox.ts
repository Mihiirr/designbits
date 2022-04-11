/* eslint-disable @typescript-eslint/no-use-before-define */
import { useKeyPress } from "ahooks"
import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react"
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
    case SelectionActionType.SET_OPTION_ACTIVE:
      return {
        ...state,
        activeOptionIndex: action.optionIndex,
      }
    case SelectionActionType.RESET_SELECTION:
      return {
        ...state,
        selectedOptions: {},
      }
    default:
      return state
  }
}

export function useCombobox(
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
  const inputRef = useRef<HTMLInputElement>(null)
  const comboboxRef = useRef<HTMLDivElement>(null)

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
  const [searchText, setSearchText] = useState("")

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

  const filteredOptions = useMemo(() => {
    if (searchText === "") {
      return options
    }
    return options.filter((option: { label: string }) =>
      option.label.toLowerCase().includes(searchText.toLowerCase()),
    )
  }, [searchText, options])

  useEffect(() => {
    setActiveOptionIndex(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredOptions.length])

  const setActiveOptionIndex: (
    optionIndex: number,
    direction?: "up" | "down",
  ) => void = useCallback(
    (optionIndex: number, direction?: "up" | "down") => {
      optionsRefs.current?.[filteredOptions[optionIndex]?.id]?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      })

      dispatch({ type: SelectionActionType.SET_OPTION_ACTIVE, optionIndex })
    },
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    [filteredOptions],
  )

  useKeyPress(
    ["uparrow", "shift.tab"],
    event => {
      event.preventDefault()
      setActiveOptionIndex(
        activeOptionIndex > 0 ? activeOptionIndex - 1 : 0,
        "up",
      )
    },
    {
      target: inputRef,
      exactMatch: true,
    },
  )

  useKeyPress(
    ["downarrow", "tab"],
    event => {
      event.preventDefault()
      setActiveOptionIndex(
        activeOptionIndex < filteredOptions.length - 1
          ? activeOptionIndex + 1
          : filteredOptions.length - 1,
        "down",
      )
    },
    {
      target: inputRef,
      exactMatch: true,
    },
  )

  useKeyPress(
    "enter",
    event => {
      event.preventDefault()
      const option = filteredOptions[activeOptionIndex]
      const isSelected = selectedOptions[option.id] || false
      isSelected
        ? removeOptionFromSelection(option)
        : addOptionToSelection(option)
    },
    {
      target: inputRef,
    },
  )

  useKeyPress(
    "esc",
    event => {
      if (inputRef.current && inputRef.current.value.length > 0) {
        setSearchText("")
      } else {
        closeListBox()
        btnRef.current?.focus()
      }
    },
    {
      target: inputRef,
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
      inputRef.current?.focus()
    }
  }, [isListBoxOpen])

  useOnClickOutside([btnRef, ulRef, inputRef], () => {
    closeListBox()
  })

  return {
    addOptionToSelection,
    removeOptionFromSelection,
    selectedOptions,
    isListBoxOpen,
    closeListBox,
    toggleListBoxOpen,
    activeOptionIndex,
    setActiveOptionIndex,
    ulRef,
    btnRef,
    optionsRefs,
    inputRef,
    comboboxRef,
    searchText,
    setSearchText,
    filteredOptions,
    resetSelection,
  }
}
