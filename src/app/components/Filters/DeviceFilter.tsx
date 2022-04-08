import React, { useCallback } from "react"

import { Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { SelectorIcon } from "@heroicons/react/solid"
import { Device } from "@prisma/client"
import { useSearchParams } from "remix"
import {
  devices,
  useSortAndFilter,
} from "~/context-modules/SortAndFilterContext"

type Props = {}

const DeviceFilter = (props: Props) => {
  const {
    filters: { device: selectedDevice },
    setFilters,
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
        <Listbox.Button className="relative w-full cursor-default rounded-lg border border-gray-300 bg-gray-50 py-2 pl-3 pr-10 text-left shadow-sm hover:bg-blue-50 focus:outline-none focus-visible:border-indigo-500 focus-visible:bg-blue-50 sm:text-sm">
          <span className="block truncate">
            {selectedDevice ? selectedDevice.label : "Devices"}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <SelectorIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
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
