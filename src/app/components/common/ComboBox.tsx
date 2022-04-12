import clsx from "clsx"
import { useMemo } from "react"
import { Option, SelectedOptions } from "~/hooks/useMultiSelect"
import { useCombobox } from "~/hooks/useCombobox"
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
    return "All Industries"
  }

  let selectedOptionText = labels[0] || ""

  for (let index = 1; index < labels.length; index++) {
    const label = labels[index]
    const newLabel = `${selectedOptionText}, ${label}`
    if (newLabel.length > 30) {
      selectedOptionText = `${selectedOptionText}, & ${
        labels.length - index
      } more`
      break
    }

    selectedOptionText = `${selectedOptionText}, ${label}`
  }

  return selectedOptionText
}

type Props = {
  id: string
  label: string
  options: Option[]
  initSelectedOptions?: SelectedOptions
  onChange: (
    targetOption: Option | undefined,
    action: "ADDED_TO_SELECTION" | "REMOVED_FROM_SELECTION" | "RESET_SELECTION",
    selectedOptions: SelectedOptions,
  ) => void
  renderSelectedOptions?: typeof getSelectedOptionsText
}

const ComboBox = ({
  id,
  label,
  options,
  initSelectedOptions = {},
  onChange,
  renderSelectedOptions = getSelectedOptionsText,
}: Props) => {
  const {
    selectedOptions,
    addOptionToSelection,
    removeOptionFromSelection,
    resetSelection,
    toggleListBoxOpen,
    isListBoxOpen,
    activeOptionIndex,
    setActiveOptionIndex,
    btnRef,
    ulRef,
    optionsRefs,
    inputRef,
    filteredOptions,
    searchText,
    setSearchText,
    comboboxRef,
  } = useCombobox(options, initSelectedOptions, onChange)

  const selectedOptionText = useMemo(
    () => renderSelectedOptions(selectedOptions, options),
    [selectedOptions, options, renderSelectedOptions],
  )

  return (
    <div className="relative mt-1">
      <label id={`combobox-label-${id}`} className="sr-only">
        {label}
      </label>
      <div
        role="combobox"
        ref={comboboxRef}
        aria-expanded={isListBoxOpen}
        aria-owns={`listbox-options-${id}`}
        aria-haspopup="listbox"
        aria-controls={`listbox-options-${id}`}
        tabIndex={-1}
        className={clsx(
          "relative flex w-full cursor-default rounded-lg border shadow-sm hover:bg-blue-50 focus:outline-none focus-visible:border-indigo-500 focus-visible:bg-blue-50 sm:text-sm",
          selectedOptionText !== ""
            ? " bg-indigo-50 outline-none"
            : "border-gray-300 bg-gray-50",
        )}
        id={id}
      >
        <button
          ref={btnRef}
          className="flex-1 py-2 pl-3 pr-10 text-left"
          onClick={toggleListBoxOpen}
          id={`combobox-dropdown-button-${id}`}
          aria-label={`show ${label} options`}
        >
          <span className="block select-none truncate">
            {selectedOptionText ? selectedOptionText : "All Industries"}
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
      <span id={`listbox-options-label-${id}`} className="sr-only">
        {label} options
      </span>

      {isListBoxOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white pb-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
          <div className=" w-full bg-white p-3">
            <input
              ref={inputRef}
              className="w-full rounded-lg bg-transparent py-2 pl-3 pr-10 text-left text-sm text-gray-700 outline-none"
              type="text"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              aria-autocomplete="both"
              aria-controls={`listbox-options-${id}`}
              aria-labelledby={`combobox-label-${id}`}
              id={`combobox-input-${id}`}
              placeholder="Type to filter options"
            />
          </div>
          <ul
            id={`listbox-options-${id}`}
            tabIndex={-1}
            ref={ulRef}
            className="max-h-60 overflow-auto"
            role="listbox"
            aria-labelledby={`listbox-options-label-${id}`}
            aria-multiselectable="true"
          >
            {filteredOptions.length === 0 && (
              <div className="py-2 px-4">
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No Industries
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  No industry found for search term{" "}
                  <span className="font-bold italic text-gray-800">
                    {searchText}
                  </span>
                </p>
              </div>
            )}
            <div>
              {filteredOptions.map((option, index) => {
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
                        className="h-4 w-4 rounded border-gray-300 focus:ring-0 focus:ring-offset-0"
                        aria-hidden
                      />
                      <div className="block truncate font-normal">{label}</div>
                    </div>
                  </li>
                )
              })}
            </div>
          </ul>
        </div>
      )}
    </div>
  )
}

export default ComboBox
