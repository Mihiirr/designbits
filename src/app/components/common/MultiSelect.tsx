import clsx from "clsx"
import { useMemo } from "react"
import { Option, SelectedOptions, useMultiSelect } from "~/hooks/useMultiSelect"
import { XIcon } from "@heroicons/react/outline"

const getSelectedOptionsText = (
  selectedOptions: {
    [key: string]: boolean
  },
  options: Option[],
) => {
  const labels = options
    .filter(option => selectedOptions[option.id])
    .map(option => option.label)

  if (labels.length === options.length) {
    return "All Platforms"
  }
  return labels.join(", ")
}

type Props = {
  options: Option[]
  initSelectedOptions?: SelectedOptions
  onChange: (
    targetOption: Option | undefined,
    action: "ADDED_TO_SELECTION" | "REMOVED_FROM_SELECTION" | "RESET_SELECTION",
    selectedOptions: SelectedOptions,
  ) => void
  renderSelectedOptions?: typeof getSelectedOptionsText
}

const MultiSelect = ({
  options,
  initSelectedOptions = {},
  onChange,
  renderSelectedOptions = getSelectedOptionsText,
}: Props) => {
  const {
    selectedOptions,
    addOptionToSelection,
    resetSelection,
    removeOptionFromSelection,
    toggleListBoxOpen,
    isListBoxOpen,
    activeOptionIndex,
    setActiveOptionIndex,
    btnRef,
    ulRef,
    optionsRefs,
  } = useMultiSelect(options, initSelectedOptions, onChange)

  const selectedOptionText = useMemo(
    () => renderSelectedOptions(selectedOptions, options),
    [selectedOptions, options, renderSelectedOptions],
  )

  return (
    <div className="relative mt-1">
      <div
        className={clsx(
          "relative flex w-full cursor-default rounded-lg border  shadow-sm hover:bg-blue-50 focus:outline-none focus-visible:border-indigo-500 focus-visible:bg-blue-50 sm:text-sm",
          selectedOptionText !== ""
            ? " bg-indigo-50 outline-none"
            : "border-gray-300 bg-gray-50",
        )}
      >
        <button
          ref={btnRef}
          className="flex-1 py-2 pl-3 pr-10 text-left"
          id="platform-filter-dropdown-button"
          onClick={toggleListBoxOpen}
          type="button"
          aria-haspopup="true"
          aria-expanded="true"
          aria-controls="platform-filter"
        >
          <span className={clsx("block truncate")}>
            {selectedOptionText ? selectedOptionText : "All Platforms"}
          </span>
          {!selectedOptionText && (
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          )}
        </button>
        {selectedOptionText && (
          <button
            title="clear filter"
            className="flex items-center px-2 text-gray-400 hover:text-indigo-600"
            onClick={() => {
              resetSelection()
            }}
          >
            <XIcon className="h-5 w-5 " aria-hidden="true" />
          </button>
        )}
      </div>
      <span id="platform-filter-label" className="sr-only">
        Platform options
      </span>
      {isListBoxOpen && (
        <ul
          id="platform-filter"
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          tabIndex={-1}
          ref={ulRef}
          role="listbox"
          aria-labelledby="platform-filter-label"
          aria-multiselectable="true"
        >
          {options.map((option, index) => {
            const { id: optionId, label } = option
            const isSelected = selectedOptions[optionId] || false
            const isActive = activeOptionIndex === index
            return (
              <li
                className="relative flex cursor-default select-none items-center"
                ref={ref => (optionsRefs.current[optionId] = ref)}
                key={optionId}
                id={optionId}
                role="option"
                aria-selected={isSelected}
                onClick={() =>
                  isSelected
                    ? removeOptionFromSelection(option)
                    : addOptionToSelection(option)
                }
                onMouseOver={() => setActiveOptionIndex(index)}
              >
                <div
                  className={clsx(
                    "flex w-full items-center space-x-2 py-2 px-4 transition-colors",
                    isSelected
                      ? isActive
                        ? "bg-indigo-200 font-medium text-indigo-600"
                        : "bg-indigo-50 font-medium text-indigo-600"
                      : isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-800",
                  )}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    tabIndex={-1}
                    readOnly
                    disabled
                    className="h-4 w-4 rounded border-gray-300 focus:ring-0 focus:ring-offset-0"
                    aria-hidden
                  />
                  <div className="block truncate font-normal">{label}</div>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default MultiSelect
