import React from "react"
import { Outlet } from "remix"
import CategoriesNav from "~/components/CategoriesNav"
import Layout from "~/components/Layout"

interface Props {}

const Explore = (props: Props) => {
  return (
    <Layout>
      <div className="w-40 shrink-0 lg:w-56">
        <CategoriesNav />
      </div>
      <div className="flex-1 flex-col">
        <Outlet />
      </div>
    </Layout>
  )
}

export default Explore
