import React from "react"

import { Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid"

type Props = {}

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
]

const DeviceFilter = (props: Props) => {
  const [selected, setSelected] = useState<{
    name: string
  }>()

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full cursor-default rounded-lg border border-gray-300 bg-gray-50 py-2 pl-3 pr-10 text-left shadow-sm hover:bg-blue-50 focus:outline-none focus-visible:border-indigo-500 focus-visible:bg-blue-50 sm:text-sm">
          <span className="block truncate">
            {selected ? selected.name : "Devices"}
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
            {people.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className="relative cursor-default select-none"
                value={person}
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
                      {person.name}
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
