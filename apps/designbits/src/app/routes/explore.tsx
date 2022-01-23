import React from "react"
import { Outlet } from "remix"
import CategoriesNav from "~/components/CategoriesNav"
import Layout from "~/components/Layout"

interface Props {}

const Explore = (props: Props) => {
  return (
    <Layout>
      <div className="shrink-0 w-40 lg:w-56">
        <CategoriesNav />
      </div>
      <div className="flex-col flex-1">
        <Outlet />
      </div>
    </Layout>
  )
}

export default Explore
