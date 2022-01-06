import { Outlet, useCatch } from "remix"
import type { LinksFunction } from "remix"

import styles from "~/styles/tailwind.css"
import Layout from "~/components/Layout"
import Link from "~/components/Link"
import Document from "~/components/common/Document"

// https://remix.run/api/app#links
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://rsms.me/inter/inter.css",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ]
}

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
// TODO: create our own ErrorBoundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
// TODO: update catch boundary
export function CatchBoundary() {
  const caught = useCatch()

  let message
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      )
      break
    case 404:
      message = <p>Please check the URL in the address bar and try again.</p>
      break

    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <div className="py-16 px-4 my-auto mx-auto min-h-full bg-white sm:py-24 sm:px-6 md:grid md:place-items-center lg:px-8">
          <div className="mx-auto max-w-max">
            <main className="sm:flex">
              <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
                {caught.status}
              </p>
              <div className="sm:ml-6">
                <div className="sm:pl-6 sm:border-l sm:border-gray-200">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                    {caught.statusText}
                  </h1>
                  <p className="mt-1 text-base text-gray-500">{message}</p>
                </div>
                <div className="flex mt-10 space-x-3 sm:pl-6 sm:border-l sm:border-transparent">
                  <Link
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
      </Layout>
    </Document>
  )
}
