import { useCallback } from "react"

import {
  platformOptions,
  useSortAndFilter,
} from "~/context-modules/SortAndFilterContext"
import MultiSelect from "../common/MultiSelect"

type Props = {}

const PlatfromFilter = (props: Props) => {
  const {
    filters: { platforms: selectedOptions },
    setFilters,
  } = useSortAndFilter()

  const handleChange = useCallback(
    (option, action, newSelectedOptions) => {
      setFilters({
        platforms: {
          values: newSelectedOptions,
          totalOptions: platformOptions.length,
        },
      })
    },
    [setFilters],
  )

  return (
    <MultiSelect
      initSelectedOptions={selectedOptions}
      options={platformOptions}
      onChange={handleChange}
    />
  )
}

export default PlatfromFilter
