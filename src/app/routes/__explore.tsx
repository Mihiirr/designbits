import React from "react"
import { Outlet } from "remix"
import CategoriesNav from "~/components/CategoriesNav"
import Layout from "~/components/Layout"

interface Props {}

const __explore = (props: Props) => {
  return (
    <Layout>
      <div className="flex-shrink-0 w-56">
        <CategoriesNav />
      </div>
      <div className="flex-1 flex-col">
        <Outlet />
      </div>
    </Layout>
  )
}

export default __explore
