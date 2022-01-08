import { Outlet, useCatch } from "remix"
import type { LinksFunction } from "remix"
import React from "react"
import { useSpinDelay } from "spin-delay"

import styles from "~/styles/tailwind.css"
import Layout from "~/components/Layout"
import Link from "~/components/Link"
import Document from "~/components/common/Document"
import { getThemeSession } from "~/utils/theme.server"
import { useTransition } from "remix"
import { NotificationMessage } from "./components/NotificationMessage"
import { AnimatePresence, motion } from "framer-motion"
import { TeamCircle } from "./components/team-circle"
import Spinner from "./components/Spinner"

const LOADER_WORDS = [
  "loading",
  "checking cdn",
  "checking cache",
  "fetching from db",
  "compiling mdx",
  "updating cache",
  "transfer",
]

const ACTION_WORDS = [
  "packaging",
  "zapping",
  "validating",
  "processing",
  "calculating",
  "computing",
  "computering",
]

// we don't want to show the loading indicator on page load
let firstRender = true
function PageLoadingMessage() {
  const transition = useTransition()
  const [words, setWords] = React.useState<Array<string>>([])
  const [pendingPath, setPendingPath] = React.useState("")
  const showLoader = useSpinDelay(Boolean(transition.state !== "idle"), {
    delay: 400,
    minDuration: 1000,
  })

  React.useEffect(() => {
    if (firstRender) return
    if (transition.state === "idle") return
    if (transition.state === "loading") setWords(LOADER_WORDS)
    if (transition.state === "submitting") setWords(ACTION_WORDS)

    const interval = setInterval(() => {
      setWords(([first, ...rest]) => [...rest, first] as Array<string>)
    }, 2000)

    return () => clearInterval(interval)
  }, [pendingPath, transition.state])

  React.useEffect(() => {
    if (firstRender) return
    if (transition.state === "idle") return
    setPendingPath(transition.location.pathname)
  }, [transition])

  React.useEffect(() => {
    firstRender = false
  }, [])

  const action = words[0]

  return (
    <NotificationMessage position="bottom-right" visible={showLoader}>
      <div className="flex items-center w-64">
        <motion.div
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          animate={{ rotate: 360 }}
        >
          <Spinner height={48} width={48} />
        </motion.div>
        <div className="inline-grid ml-4">
          <AnimatePresence>
            <div className="flex overflow-hidden col-start-1 row-start-1">
              <motion.span
                key={action}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex-none"
              >
                {action}
              </motion.span>
            </div>
          </AnimatePresence>
          <span className="truncate text-secondary">path: {pendingPath}</span>
        </div>
      </div>
    </NotificationMessage>
  )
}

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
    {
      rel: "preload",
      as: "font",
      href: "/fonts/Matter-Medium.woff2",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/Matter-Regular.woff2",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
  ]
}

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <PageLoadingMessage></PageLoadingMessage>
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
