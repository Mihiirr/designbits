import clsx from "clsx"
import React, { useState } from "react"
import { usePopper } from "react-popper"
import { motion } from "framer-motion"

type Props = {
  chars: string[]
  index: number
  handleMentionItemClick: (index: number) => void
  referenceElement: Range | null
}

const MentionsDropdown: React.FC<Props> = ({
  chars,
  index,
  handleMentionItemClick,
  referenceElement,
}) => {
  const [popperElement, setPopperElement] = useState<HTMLUListElement | null>(
    null,
  )

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
  })

  return (
    <motion.ul
      ref={setPopperElement}
      style={styles.popper}
      {...attributes.popper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, type: "spring" }}
      exit={{ opacity: 0 }}
      className="absolute z-10 mt-1 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
    >
      <motion.div
        initial={{ y: "-10%" }}
        animate={{ y: 0, type: "spring" }}
        exit={{ opacity: 0 }}
      >
        {chars.map((char, i) => (
          <li
            key={char}
            className={clsx(
              "relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900",
              i === index ? "bg-sky-200" : "",
            )}
            onClick={() => {
              handleMentionItemClick(i)
            }}
          >
            <div className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt=""
                className="h-6 w-6 shrink-0 rounded-full"
              />
              <span>{char}</span>
            </div>
          </li>
        ))}
      </motion.div>
    </motion.ul>
  )
}

export default MentionsDropdown
