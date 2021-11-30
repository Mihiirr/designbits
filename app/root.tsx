import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix"
import type { LinksFunction } from "remix"

import styles from "./styles/tailwind.css"
import Layout from "./components/Layout"
import Link from "./components/Link"

// https://remix.run/api/app#links
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }]
}

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
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
        <div className="mx-auto my-auto px-4 py-16 min-h-full bg-white sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div className="mx-auto max-w-max">
            <main className="sm:flex">
              <p className="text-indigo-600 text-4xl font-extrabold sm:text-5xl">
                {caught.status}
              </p>
              <div className="sm:ml-6">
                <div className="sm:pl-6 sm:border-l sm:border-gray-200">
                  <h1 className="text-gray-900 text-4xl font-extrabold tracking-tight sm:text-5xl">
                    {caught.statusText}
                  </h1>
                  <p className="mt-1 text-gray-500 text-base">{message}</p>
                </div>
                <div className="flex mt-10 space-x-3 sm:pl-6 sm:border-l sm:border-transparent">
                  <Link
                    to="/explore"
                    className="inline-flex items-center px-4 py-2 text-white text-sm font-medium bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-md focus:outline-none shadow-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Explore
                  </Link>
                  <a
                    href="/"
                    className="inline-flex items-center px-4 py-2 text-indigo-700 text-sm font-medium bg-indigo-100 hover:bg-indigo-200 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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

function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
