import React, { useCallback } from "react"

import { Fragment } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { SelectorIcon } from "@heroicons/react/solid"
import {
  devices,
  useSortAndFilter,
} from "~/context-modules/SortAndFilterContext"
import { XIcon } from "@heroicons/react/outline"
import clsx from "clsx"

type Props = {}

const DeviceFilter = (props: Props) => {
  const {
    filters: { device: selectedDevice },
    setFilters,
    resetFilter,
  } = useSortAndFilter()

  const handleChange = useCallback(
    (selectedOption: typeof selectedDevice) => {
      setFilters({
        device: {
          value: selectedOption,
        },
      })
    },
    [setFilters],
  )

  return (
    <Listbox value={selectedDevice} onChange={handleChange}>
      <div className="relative mt-1">
        <div
          className={clsx(
            "relative flex w-full cursor-default rounded-lg border border-gray-300 text-left shadow-sm hover:bg-blue-50 focus:outline-none focus-visible:border-indigo-500 focus-visible:bg-blue-50 sm:text-sm",
            selectedDevice
              ? " bg-indigo-50 outline-none"
              : "border-gray-300 bg-gray-50",
          )}
        >
          <Listbox.Button className="flex-1 py-2 pl-3 pr-10 text-left">
            <span className="block truncate">
              {selectedDevice ? selectedDevice.label : "Devices"}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              {!selectedDevice && (
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              )}
            </span>
          </Listbox.Button>
          {selectedDevice && (
            <button
              title="clear filter"
              className="flex items-center px-2 text-gray-400 hover:text-indigo-600"
              onClick={() => {
                resetFilter("device")
              }}
            >
              <XIcon className="h-5 w-5 " aria-hidden="true" />
            </button>
          )}
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {devices.map((device, deviceIdx) => (
              <Listbox.Option
                key={deviceIdx}
                className="relative cursor-default select-none"
                value={device}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate py-2 px-4 ${
                        active
                          ? selected
                            ? "bg-indigo-200 font-medium text-indigo-800"
                            : "bg-indigo-50 font-normal text-indigo-900"
                          : selected
                          ? "bg-indigo-100 font-medium text-indigo-800"
                          : "font-normal text-gray-800"
                      }`}
                    >
                      {device.label}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default DeviceFilter
