import { useEffect, useState } from "react"
import { Option } from "~/hooks/useMultiSelect"
import MultiSelect from "../common/MultiSelect"

type Props = {}

const options: Option[] = [
  {
    id: "web",
    label: "Web",
  },
  {
    id: "ios",
    label: "iOS",
  },
  {
    id: "android",
    label: "Android",
  },
  {
    id: "windows",
    label: "Windows",
  },
]

const PlatfromFilter = (props: Props) => {
  const [selectedOptions, setSelectedOptions] = useState({})

  useEffect(() => {
    console.log({ selectedOptions })
  }, [selectedOptions])

  return (
    <MultiSelect
      initSelectedOptions={selectedOptions}
      options={options}
      onChange={(option, action, selectedOptions) => {
        setSelectedOptions(selectedOptions)
      }}
    />
  )
}

export default PlatfromFilter
