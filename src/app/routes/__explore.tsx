import React from "react"
import { Outlet } from "remix"
import CategoriesNav from "~/components/CategoriesNav"
import Layout from "~/components/Layout"

interface Props {}

const __explore = (props: Props) => {
  return (
    <Layout>
      <div className="shrink-0 w-56">
        <CategoriesNav />
      </div>
      <div className="flex-col flex-1">
        <Outlet />
      </div>
    </Layout>
  )
}

export default __explore
