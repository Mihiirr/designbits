import { SearchIcon } from "@heroicons/react/outline"
import React from "react"

interface Props {}

const SearchBox = (props: Props) => {
  return (
    <div className="hidden lg:block">
      <label htmlFor="search" className="sr-only">
        Quick search
      </label>
      <div className="relative flex items-center text-gray-400">
        <div className="absolute inset-y-0 left-0 flex items-center py-1.5 pl-2">
          <SearchIcon height="20" width="20" role="presentation" />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          role="search"
          className="block w-72 rounded-md border-transparent bg-gray-100 pr-12 pl-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-2">
          <kbd className="inline-flex items-center rounded border border-gray-300 px-2 font-sans text-sm font-medium">
            ⌘ K
          </kbd>
        </div>
      </div>
    </div>
  )
}

export default SearchBox
