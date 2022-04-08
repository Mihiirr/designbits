import { Device, Platfrom } from "@prisma/client"
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react"
import { useSearchParams } from "remix"
import { Option } from "~/hooks/useCombobox"
import { SelectedOptions } from "~/hooks/useMultiSelect"

type SET_FILTERS_ACTION = {
  type: "SET_FILTERS"
  payload: Partial<{
    device: {
      value:
        | {
            label: string
            id: string
          }
        | undefined
    }
    platforms: {
      values: SelectedOptions | undefined
      totalOptions: number
    }
    industries: {
      values: SelectedOptions | undefined
      totalOptions: number
    }
  }>
}

type SET_SORT_PREFERENCE_ACTION = {
  type: "SET_SORT_PREFERENCE"
  payload: {
    sort: {
      label: string
      id: string
    }
  }
}

type RESET_FILTER_ACTION = {
  type: "RESET_FILTER"
  payload: {
    filterKey: keyof State["filters"] | (keyof State["filters"])[]
  }
}

type Action =
  | SET_FILTERS_ACTION
  | SET_SORT_PREFERENCE_ACTION
  | RESET_FILTER_ACTION
type SetFilters = (filters: SET_FILTERS_ACTION["payload"]) => void
type ResetFilter = (
  filterKey: keyof State["filters"] | (keyof State["filters"])[],
) => void
type SetSortPreference = (sort: SET_SORT_PREFERENCE_ACTION["payload"]) => void

type State = {
  filters: {
    device:
      | {
          label: string
          id: string
        }
      | undefined
    platforms: SelectedOptions | undefined
    industries: SelectedOptions | undefined
  }
  sort: {
    label: string
    id: string
  }
}
type SortAndFilterProviderProps = {
  children: React.ReactNode
  initSortBy?: string
}

export const sortConfig = [
  { label: "Recently Added", id: "recently-added" },
  { label: "Popular", id: "popular" },
]

export const devices = [
  { id: Device.MOBILE, label: "Mobile" },
  { id: Device.TABLET, label: "Tablet" },
  { id: Device.DESKTOP, label: "Desktop" },
]

export const platformOptions: Option[] = [
  {
    id: Platfrom.WEB,
    label: "Web",
  },
  {
    id: Platfrom.IOS,
    label: "iOS",
  },
  {
    id: Platfrom.ANDROID,
    label: "Android",
  },
]

const SortAndFilterStateContext = createContext<
  | {
      filters: State["filters"]
      sort: State["sort"]
      setFilters: SetFilters
      setSortPreference: SetSortPreference
      resetFilter: ResetFilter
      hasSelectedFilters: boolean
    }
  | undefined
>(undefined)

function updateSearchParams(
  newState: State,
  action: Action,
  searchParams: URLSearchParams,
  setSearchParams: (params: URLSearchParams) => void,
) {
  // Set device filter
  const selectedDevice = newState.filters.device?.id?.toLowerCase()
  if (selectedDevice) {
    searchParams.set("device", selectedDevice)
  } else {
    searchParams.delete("device")
  }

  // Set platforms filter
  const selectedPlatforms = Object.entries(
    newState.filters.platforms || {},
  ).filter(([platformId, isSelected]) => isSelected)

  let platformsValue = ""
  if (selectedPlatforms.length === platformOptions.length) {
    platformsValue = "all"
  } else {
    platformsValue = selectedPlatforms
      .map(([platformId]) => platformId.toLowerCase())
      .join(",&")
  }

  if (platformsValue) {
    searchParams.set("platforms", platformsValue)
  } else {
    searchParams.delete("platforms")
  }

  // Set industries filter
  const selectedIndustries = Object.entries(
    newState.filters.industries || {},
  ).filter(([, isSelected]) => isSelected)

  let industriesValue = ""
  industriesValue = selectedIndustries
    .map(([platformId]) => platformId)
    .join(",&")

  if (
    action.type === "SET_FILTERS" &&
    selectedIndustries.length === action.payload.industries?.totalOptions
  ) {
    industriesValue = "all"
  }

  if (industriesValue) {
    searchParams.set("industries", industriesValue)
  } else {
    searchParams.delete("industries")
  }

  let selectedSort = newState.sort.id
  if (selectedSort) {
    searchParams.set("sort", selectedSort)
  } else {
    searchParams.delete("sort")
  }

  setSearchParams(searchParams)
}

function sortAndFilterStateReducer(
  state: State,
  action: Action,
  searchParams: URLSearchParams,
  setSearchParams: (params: URLSearchParams) => void,
) {
  switch (action.type) {
    // case "increment": {
    //   return { count: state.count + 1 }
    // }
    case "SET_FILTERS": {
      for (var key of searchParams.keys()) {
        const value = searchParams.get(key)
        if (!value) {
          searchParams.delete(key)
        }
      }
      const newState = {
        ...state,
        filters: {
          ...state.filters,
          ...(action.payload.device?.value
            ? {
                device: action.payload.device.value,
              }
            : {}),
          ...(action.payload.platforms?.values
            ? {
                platforms: action.payload.platforms.values,
              }
            : {}),
          ...(action.payload.industries?.values
            ? {
                industries: action.payload.industries.values,
              }
            : {}),
        },
      }

      updateSearchParams(newState, action, searchParams, setSearchParams)

      return newState
    }
    case "RESET_FILTER": {
      const newState = { ...state }
      const filterKey = action.payload.filterKey
      if (Array.isArray(filterKey)) {
        filterKey.forEach(key => {
          newState.filters[key] = undefined
        })
      } else {
        newState.filters[filterKey] = undefined
      }
      console.log({ newState })
      updateSearchParams(newState, action, searchParams, setSearchParams)
      return newState
    }
    case "SET_SORT_PREFERENCE": {
      const newState = {
        ...state,
        sort: action.payload.sort,
      }
      updateSearchParams(newState, action, searchParams, setSearchParams)

      return newState
    }
    default: {
      return state
    }
  }
}

function getInitState({
  searchParams,
  initSortBy = "",
}: {
  searchParams: URLSearchParams
  initSortBy?: string
}) {
  let deviceFilter, platformFilter, industryFilter
  // Find device filter value
  const deviceFilterParam = searchParams.get("device")
  if (deviceFilterParam) {
    deviceFilter = devices.find(
      ({ id }) => id.toLowerCase() === deviceFilterParam.toLowerCase(),
    )
  }

  // Find Platforms filter
  const platformsStr = searchParams.get("platforms")
  const platfromOptions = Object.keys(Platfrom)
  if (platformsStr) {
    if (platformsStr === "all") {
      platformFilter = platfromOptions.reduce((acc, option) => {
        acc[option] = true
        return acc
      }, {} as SelectedOptions)
    } else {
      const platforms = platformsStr.split(",&")
      const selectedPlatforms = platfromOptions.filter(option =>
        platforms.includes(option.toLowerCase()),
      )
      platformFilter = selectedPlatforms.reduce((acc, option) => {
        acc[option] = true
        return acc
      }, {} as SelectedOptions)
    }
  }

  // Find industry filter
  const industriesStr = searchParams.get("industries")
  if (industriesStr) {
    if (industriesStr !== "all") {
      const industries = industriesStr.split(",&")
      industryFilter = industries.reduce(
        (acc: SelectedOptions, industryId: string) => {
          acc[industryId] = true
          return acc
        },
        {} as SelectedOptions,
      )
    }
  }

  // Find Sort preference
  const sortPreference =
    sortConfig.find(opt => opt.id === searchParams.get("sort") || initSortBy) ||
    sortConfig[0]

  return {
    filters: {
      device: deviceFilter,
      platforms: platformFilter,
      industries: industryFilter,
    },
    sort: sortPreference,
  }
}

function SortAndFilterProvider({
  children,
  initSortBy,
}: SortAndFilterProviderProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [state, dispatch] = useReducer(
    (state: State, action: Action) =>
      sortAndFilterStateReducer(state, action, searchParams, setSearchParams),
    { searchParams, initSortBy },
    getInitState,
  )

  const setFilters = useCallback<SetFilters>(
    filters => dispatch({ type: "SET_FILTERS", payload: filters }),
    [],
  )

  const resetFilter = useCallback<ResetFilter>(
    filterKey => dispatch({ type: "RESET_FILTER", payload: { filterKey } }),
    [],
  )

  const setSortPreference = useCallback<SetSortPreference>(
    sort => dispatch({ type: "SET_SORT_PREFERENCE", payload: sort }),
    [],
  )

  const hasSelectedFilters = Object.entries(state.filters).some(
    ([filterKey, filterValue]) => {
      switch (filterKey) {
        case "device":
          return !!filterValue
        case "platforms":
        case "industries":
          return (
            filterValue &&
            Object.values(filterValue as SelectedOptions).some(v => v)
          )
      }
      return false
    },
  )

  const value = useMemo(() => {
    return {
      filters: state.filters,
      sort: state.sort,
      setFilters,
      resetFilter,
      setSortPreference,
      hasSelectedFilters,
    }
  }, [
    state.filters,
    state.sort,
    setFilters,
    resetFilter,
    setSortPreference,
    hasSelectedFilters,
  ])

  return (
    <SortAndFilterStateContext.Provider value={value}>
      {children}
    </SortAndFilterStateContext.Provider>
  )
}

function useSortAndFilter() {
  const context = useContext(SortAndFilterStateContext)
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider")
  }
  return context
}

export { SortAndFilterProvider, useSortAndFilter }
