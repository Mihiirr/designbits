import React from 'react'
import CategoriesNav from '~/components/CategoriesNav'
import { Children } from 'react';
import { LoaderFunction, useLoaderData } from 'remix';

interface Props {

}

interface LoaderData {
    categoryId: string
}

export let loader: LoaderFunction = async ({ params }) => {
    const categoryId = params.category;
    return { categoryId };
};

const CategoryPage: React.FC<Props> = ({ children }) => {
    const { categoryId } = useLoaderData<LoaderData>()
    return (
        <>
            <header>
                <div className="px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">{categoryId}</h1>
                </div>
            </header>
            <main>
                <div className="sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </>
    )
}

export default CategoryPage
