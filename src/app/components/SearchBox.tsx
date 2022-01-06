import { SearchIcon } from "@heroicons/react/outline"
import React from "react"

interface Props {}

const SearchBox = (props: Props) => {
  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Quick search
      </label>
      <div className="flex relative items-center mt-1 text-gray-400">
        <div className="flex absolute inset-y-0 left-0 items-center py-1.5 pl-2">
          <SearchIcon height="20" width="20" role="presentation" />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          role="search"
          className="block pr-12 pl-10 w-72 bg-gray-100 rounded-md border-transparent focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
        />
        <div className="flex absolute inset-y-0 right-0 py-1.5 pr-2">
          <kbd className="inline-flex items-center px-2 font-sans text-sm font-medium rounded border border-gray-300">
            ⌘ K
          </kbd>
        </div>
      </div>
    </div>
  )
}

export default SearchBox
