import React from "react"
import { Link } from "remix"

type Props = {}

const EmptyState = (props: Props) => {
  return (
    <div className="py-16 px-4 m-auto min-h-full bg-white sm:py-24 sm:px-6 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <div className="sm:ml-6">
            <div className="sm:pl-6 sm:border-l sm:border-gray-200">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                You have not liked any design
              </h1>
              <p className="mt-1 text-base text-gray-500">
                please explore for some more design{" "}
              </p>
            </div>
            <div className="flex mt-10 space-x-3 sm:pl-6 sm:border-l sm:border-transparent">
              <Link
                prefetch="intent"
                to="/explore"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm"
              >
                Explore
              </Link>
              <a
                href="/"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Go back home
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default EmptyState
