import React from "react"
import Layout from "~/components/Layout"

/* This example requires Tailwind CSS v2.0+ */

type Props = {}

const CommingSoon = (props: Props) => {
  return (
    <Layout>
      <div className="my-10 mx-auto h-full text-center md:my-24">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">
          Collections comming soon!
        </h3>
        <p className="mt-1 text-sm text-gray-500">Stay tuned!</p>
        {/* <div className="mt-6">
          <button
            type="button"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm"
          >
            <PlusIcon className="mr-2 -ml-1 w-5 h-5" aria-hidden="true" />
            New Project
          </button>
        </div> */}
      </div>
    </Layout>
  )
}

export default CommingSoon
