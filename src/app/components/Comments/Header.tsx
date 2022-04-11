import { XIcon } from "@heroicons/react/outline"
import clsx from "clsx"
import { useCallback } from "react"
import { useBoolean } from "usehooks-ts"
import { useSortAndFilter } from "~/context-modules/SortAndFilterContext"
import { PostsOrderBy } from "~/services/db/queries/post.server"
import FilterPane from "../Filters/FilterPane"
import FilterIcon from "../icons/Filter"
import SortDropdown from "../SortDropdown"

type Props = {
  category: string
  orderBy: PostsOrderBy
}

const Header = ({ category, orderBy }: Props) => {
  const { value: isFiltersShown, toggle: toggleFilters } = useBoolean(false)
  const { hasSelectedFilters, resetFilter } = useSortAndFilter()
  const handleToggleFilters = useCallback(() => {
    if (isFiltersShown) {
      resetFilter(["device", "platforms", "industries"])
    }
    toggleFilters()
  }, [isFiltersShown, resetFilter, toggleFilters])
  return (
    <header>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {category}
          </h1>
          <div className="flex space-x-4 text-sm text-gray-600">
            <button
              className={clsx(
                "flex w-full items-center justify-center space-x-2 rounded-md px-4 py-1.5 hover:bg-indigo-200/20 focus-visible:ring-2 focus-visible:ring-white/75",
                hasSelectedFilters || isFiltersShown
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-600",
              )}
              onClick={handleToggleFilters}
            >
              {hasSelectedFilters ? (
                <>
                  <XIcon
                    height={20}
                    width={20}
                    role="presentation"
                    aria-hidden
                  />
                  <span>Clear Filters</span>
                </>
              ) : (
                <>
                  <FilterIcon
                    height={20}
                    width={20}
                    role="presentation"
                    aria-hidden
                  />
                  <span>{isFiltersShown ? "Hide Filters" : "Filters"}</span>
                </>
              )}
            </button>
            <SortDropdown initValue={orderBy} />
          </div>
        </div>
        <FilterPane isFiltersShown={isFiltersShown || hasSelectedFilters} />
      </div>
    </header>
  )
}

export default Header
