import { LoaderFunction, Outlet, useCatch, useLoaderData } from "remix"
import type { LinksFunction } from "remix"
import React from "react"
import { useSpinDelay } from "spin-delay"

import tailwindStyles from "~/styles/tailwind.css"
import videoStyles from "~/styles/video.css"

import Link from "~/components/Link"
import Document from "~/components/common/Document"
import { useTransition } from "remix"
import { NotificationMessage } from "./components/NotificationMessage"
import { AnimatePresence, motion } from "framer-motion"
import Spinner from "./components/Spinner"
import { getLoggedInUser } from "./services/auth/session.server"
import { OkResponse } from "./utils/response-helpers.server"
import { User } from "@prisma/client"
import { RootContextProvider } from "./context/root-context"

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
    delay: 1000,
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
      <div className="flex w-64 items-center">
        <motion.div
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          animate={{ rotate: 360 }}
        >
          <Spinner height={48} width={48} />
        </motion.div>
        <div className="ml-4 inline-grid">
          <AnimatePresence>
            <div className="col-start-1 row-start-1 flex overflow-hidden">
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
          <span className="truncate">path: {pendingPath}</span>
        </div>
      </div>
    </NotificationMessage>
  )
}

// https://remix.run/api/app#links
export const links: LinksFunction = () => {
  return [
    {
      rel: "preload",
      as: "font",
      href: "/fonts/wotfard/wotfard-regular-webfont.woff2",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/wotfard/wotfard-medium-webfont.woff2",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: tailwindStyles,
    },
    {
      rel: "stylesheet",
      href: videoStyles,
    },
    {
      rel: "stylesheet",
      href: "/fonts/wotfard/wotfard-font.css",
    },
  ]
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getLoggedInUser(request)
  return OkResponse({ user })
}

interface SuccessResponse {
  ok: boolean
}

interface LoaderData extends SuccessResponse {
  user: User | null
}

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  const loaderData = useLoaderData<LoaderData>()
  const rootContextData = { user: loaderData.user, isAuthModalOpen: false }
  return (
    <RootContextProvider initState={rootContextData}>
      <Document>
        <PageLoadingMessage></PageLoadingMessage>
        <Outlet />
      </Document>
    </RootContextProvider>
  )
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
// TODO: create our own ErrorBoundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)
  return (
    <Document title="Error!">
      <div>
        <h1>There was an error</h1>
        <p>{error.message}</p>
        <hr />
        <p>
          Hey, developer, you should replace this with what you want your users
          to see.
        </p>
      </div>
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
    </Document>
  )
}
