import React from 'react'
import { Outlet } from 'remix'
import CategoriesNav from '~/components/CategoriesNav'

interface Props {

}

const ExploreRoute: React.FC<Props> = () => {
    return (
        <>
            <div className="w-56 flex-shrink-0">
                <CategoriesNav />
            </div>
            <div className="flex-1 flex-col">
                <Outlet />
            </div>
        </>
    )
}

export default ExploreRoute
