import { motion, AnimatePresence } from "framer-motion"
import React from "react"
import DeviceFilter from "./DeviceFilter"
import IndustryFilter from "./IndustryFilter"
import PlatfromFilter from "./PlatfromFilter"

type Props = {
  isFiltersShown: boolean
}

const FilterPane: React.FC<Props> = ({ isFiltersShown }) => {
  return (
    <AnimatePresence initial={false}>
      {isFiltersShown && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          className="mt-6 grid grid-cols-1 gap-x-6 md:grid-cols-2 md:gap-y-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <DeviceFilter />
          <PlatfromFilter />
          <IndustryFilter />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FilterPane
