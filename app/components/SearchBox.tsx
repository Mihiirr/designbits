import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

interface Props {

}

const SearchBox = (props: Props) => {
    return (
        <div>
            <label htmlFor="search" className="sr-only">
                Quick search
            </label>
            <div className="mt-1 relative flex items-center text-gray-400">
                <div className="absolute inset-y-0 left-0 flex py-1.5 pl-2 items-center">
                    <SearchIcon height="20" width="20" role="presentation" />
                </div>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                    role="search"
                    className="pl-10 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-72 pr-12 sm:text-sm border-transparent rounded-md bg-gray-100"
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-2">
                    <kbd className="inline-flex items-center border border-gray-300 rounded px-2 text-sm font-sans font-medium ">
                        ⌘ K
                    </kbd>
                </div>
            </div>
        </div>
    )
}

export default SearchBox
