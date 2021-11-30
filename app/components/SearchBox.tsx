import { SearchIcon } from "@heroicons/react/outline"
import React from "react"

interface Props {}

const SearchBox = (props: Props) => {
  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Quick search
      </label>
      <div className="relative flex items-center mt-1 text-gray-400">
        <div className="absolute inset-y-0 left-0 flex items-center pl-2 py-1.5">
          <SearchIcon height="20" width="20" role="presentation" />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          role="search"
          className="block pl-10 pr-12 w-72 bg-gray-100 focus:border-indigo-500 border-transparent rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
        />
        <div className="absolute inset-y-0 right-0 flex pr-2 py-1.5">
          <kbd className="inline-flex items-center px-2 font-sans text-sm font-medium border border-gray-300 rounded">
            ⌘ K
          </kbd>
        </div>
      </div>
    </div>
  )
}

export default SearchBox
