import { Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import SortByIcon from "~/components/icons/SortBy"
import { useSearchParams } from "remix"

const sortConfig = [
  { label: "Recently Added", id: "recently-added" },
  { label: "Popular", id: "popular" },
]

type Props = {}

const SortDropdown: React.FC<Props> = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selected, setSelected] = useState(
    () =>
      sortConfig.find(opt => opt.id === searchParams.get("sort")) ||
      sortConfig[0],
  )

  return (
    <Listbox
      value={selected}
      onChange={val => {
        setSearchParams({ sort: val.id })
        setSelected(val)
      }}
    >
      <div className="relative">
        <Listbox.Button className="flex w-full items-center justify-center space-x-2 rounded-md px-4 py-1.5 hover:bg-indigo-200/20 focus-visible:ring-2 focus-visible:ring-white/75">
          <SortByIcon role="presentation" aria-hidden />
          <div className="whitespace-nowrap">{selected.label}</div>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-60 w-40 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {sortConfig.map(option => (
              <Listbox.Option
                key={option.id}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 px-4 ${
                    active
                      ? "bg-indigo-200/20 text-indigo-600"
                      : "text-gray-600"
                  }`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected
                          ? "font-semibold text-indigo-600"
                          : "font-normal"
                      }`}
                    >
                      {option.label}
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

export default SortDropdown
