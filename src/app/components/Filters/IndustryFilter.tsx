import { useCallback, useEffect, useMemo, useState } from "react"
import { useFetcher, useSearchParams } from "remix"
import { useSortAndFilter } from "~/context-modules/SortAndFilterContext"
import { Option, SelectedOptions } from "~/hooks/useCombobox"
import ComboBox from "../common/ComboBox"

type Props = {}

const IndustryFilter = (props: Props) => {
  const fetchIndustries = useFetcher()

  const options = useMemo(() => {
    if (fetchIndustries.type === "done") {
      return fetchIndustries.data?.data?.map(
        (industry: { slug: string; name: string }) => ({
          id: industry.slug,
          label: industry.name,
        }),
      )
    }
    return []
  }, [fetchIndustries.data, fetchIndustries.type])

  useEffect(() => {
    fetchIndustries.load(`/loader/industries`)
  }, [])

  const {
    filters: { industries: selectedOptions },
    setFilters,
  } = useSortAndFilter()

  const handleChange = useCallback(
    (option, action, newSelectedOptions) => {
      setFilters({
        industries: {
          values: newSelectedOptions,
          totalOptions: options.length,
        },
      })
    },
    [options.length, setFilters],
  )

  return (
    <ComboBox
      id="industry-filter"
      label="Industry"
      initSelectedOptions={selectedOptions}
      options={options}
      onChange={handleChange}
    />
  )
}

export default IndustryFilter
