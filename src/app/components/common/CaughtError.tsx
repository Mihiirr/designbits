import { ReactElement } from "react"
import { Link, ThrownResponse } from "remix"

type Props = {
  caught: ThrownResponse<number, any>
  message: ReactElement
}

const CaughtError = ({ caught, message }: Props) => {
  return (
    <div className="m-auto min-h-full bg-white py-16 px-4 sm:py-24 sm:px-6 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
            {caught.status}
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                {caught.statusText}
              </h1>
              <p className="mt-1 text-base text-gray-500">{message}</p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link
                prefetch="intent"
                to="/explore"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Explore
              </Link>
              <a
                href="/"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 py-2 px-4 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
export default CaughtError
