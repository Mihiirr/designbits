import { RadioGroup } from "@headlessui/react"
import { useState } from "react"
import classNames from "../utils/classnames"
import Button from "./Button"

interface Props {}

const hasSeenOptions = [
  {
    name: "yes",
    children: <>Yes ☝️</>,
  },
  {
    name: "Something similar",
    children: <>Something similar 🤔</>,
  },
  {
    name: "no",
    children: <>No 🙃</>,
  },
]

const experinceOptions = [
  {
    name: "yes",
    children: <>Creative & useful 💡</>,
    inStock: true,
  },
  {
    name: "Something similar",
    children: <>Common now-a-days 🤔</>,
  },
  {
    name: "no",
    children: <>Bad experience 😑</>,
  },
]

const InteractionFeedback = (props: Props) => {
  const [ifHasSeenValue, setIfHasSeenValue] = useState()
  const [expeinceFeedback, setExperienceFeedback] = useState()

  return (
    <div className="w-full px-8 py-16 bg-gradient-to-tl from-indigo-100 via-white to-white border-b border-indigo-100">
      <h2 className="font-bold text-xl text-gray-800">
        Help designers learn more about this interaction
      </h2>
      <div className="mt-8">
        <RadioGroup
          value={ifHasSeenValue}
          onChange={setIfHasSeenValue}
          className="mb-8"
        >
          <RadioGroup.Label className="text-sm text-gray-700 font-semibold">
            Have you ever seen this interaction before?
          </RadioGroup.Label>
          <div className="flex flex-wrap mt-4">
            {hasSeenOptions.map(option => (
              <RadioGroup.Option
                key={option.name}
                value={option}
                className={({ active, checked }) =>
                  classNames(
                    "cursor-pointer focus:outline-none text-sm",
                    active ? "ring-2 ring-offset-1 ring-indigo-500" : "",
                    checked
                      ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700"
                      : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                    "border rounded-md py-2 px-3 flex items-center justify-center shrink-0 mb-4 mr-4",
                  )
                }
              >
                <RadioGroup.Label as="p">{option.children}</RadioGroup.Label>
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        <RadioGroup
          value={expeinceFeedback}
          onChange={setExperienceFeedback}
          className="mb-8"
        >
          <RadioGroup.Label className="text-sm text-gray-700 font-semibold">
            Evaluate the experience of this interaction
          </RadioGroup.Label>
          <div className="flex flex-wrap mt-4">
            {experinceOptions.map(option => (
              <RadioGroup.Option
                key={option.name}
                value={option}
                className={({ active, checked }) =>
                  classNames(
                    "cursor-pointer focus:outline-none text-sm",
                    active ? "ring-2 ring-offset-1 ring-indigo-500" : "",
                    checked
                      ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700"
                      : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                    "border rounded-md py-2 px-3 flex items-center justify-center shrink-0 mb-4 mr-4",
                  )
                }
              >
                <RadioGroup.Label as="p">{option.children}</RadioGroup.Label>
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        <Button disabled={!expeinceFeedback || !ifHasSeenValue}>Submit</Button>
        <img
          src="/Feedback.png"
          role="presentation"
          className="absolute right-0 -translate-y-3/4 -translate-x-1/2"
        />
      </div>
    </div>
  )
}

export default InteractionFeedback
