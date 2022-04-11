import { Disclosure } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import React from "react"
import { Link, LoaderFunction, useLoaderData } from "remix"
import Button from "~/components/design-system/Button"
import DesignBitsLogo from "~/components/Logo"
import { getLoginInfoSession } from "~/services/auth/login.server"
import { getLoggedInUser } from "~/services/auth/session.server"
import { formatInteractionPostsData } from "~/services/db/formatters.server"
import { findInteractionsForCategory } from "~/services/db/queries/post.server"
import { OkResponse } from "~/utils/response-helpers.server"
import { ResponseData } from "./explore/$category"

type Props = {}

type LoaderData = ResponseData<ReturnType<typeof formatInteractionPostsData>>

const navigation = [
  { name: "Pricing", href: "/pricing" },
  {
    name: "About",
    href: "/about",
  },
]

export const loader: LoaderFunction = async ({ params, request }) => {
  const session = await getLoginInfoSession(request)
  const user = await getLoggedInUser(request)

  const interactions = formatInteractionPostsData(
    await findInteractionsForCategory({
      userId: user?.id,
    }),
  )

  return OkResponse({
    data: { interactions },
    errors: [],
    headers: await session.getHeaders(),
  })
}

const Landing = (props: Props) => {
  const { data } = useLoaderData<LoaderData>()
  console.log({ data })
  return (
    <div>
      {/* Header */}
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className=" mx-auto flex max-w-sm items-center justify-between p-4 md:max-w-2xl md:p-4 lg:max-w-4xl lg:p-4 xl:max-w-7xl xl:py-4 xl:px-0 2xl:max-w-screen-2xl">
              <DesignBitsLogo />
              <div className="flex items-center">
                <div className="hidden w-[300px] items-center justify-between sm:-my-px sm:flex">
                  <div>
                    {navigation.map(item => (
                      <Button
                        size="large"
                        rounded="regular"
                        type="link"
                        href={item.href}
                        key={item.name}
                      >
                        {item.name}
                      </Button>
                    ))}
                  </div>
                  <Button size="large">SIGN IN </Button>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 pt-2 pb-3">
                {navigation.map(item => (
                  <Disclosure.Button key={item.name} as="div">
                    <Link to={item.href}>{item.name}</Link>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* body */}
      <div className="mx-auto mt-20 max-w-sm text-left text-indigo-700 sm:max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-screen-2xl">
        <p className="mb-14 text-4xl font-light leading-tight sm:text-6xl">
          Your companion for
          <br />
          <span className="text-4xl font-bold sm:text-6xl">
            design inspirations
          </span>
          <br />
          from the industry
        </p>
        {/* Try it for free button */}
        <Button size="large" rounded="full">
          Try it for free
        </Button>
      </div>

      <div className="mx-auto w-full md:max-w-2xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-screen-2xl">
        {/* Explore by UI patterns */}
        <ExploreLanding
          title="Explore by UI pattern"
          description="Interactions categorised by UI pattern and flows. Added with filter
        based on industry like Fintech, Social media, Delievery platforms, Healthcare, etc"
          btn1="FAB button"
          btn2="Bottom navigation"
          btn3="Dropdown"
          seeMore="see more"
        />
        {/* See how other platforms are handling it */}
        <ExploreLanding
          title="See how other platforms are handling it"
          description="Browse through 2000+ recordings and screenshots of best or worst interactions from real apps"
          btn1="Expand/collapse interaction"
          btn2="Audio note recording"
          btn3="Feedback pattern"
          seeMore="see more"
        />
        {/* See how other platforms are handling it */}
        <ExploreLanding
          title="See how other platforms are handling it"
          description="Browse through 2000+ recordings and screenshots of best or worst interactions from real apps"
          btn1="Expand/collapse interaction"
          btn2="Audio note recording"
          btn3="Feedback pattern"
          seeMore="see more"
        />
      </div>

      {/* What else */}
      <div className="mx-auto mt-24 h-auto max-w-sm text-left md:max-w-2xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-screen-2xl">
        <p className="text-4xl font-bold text-indigo-700 sm:text-7xl">
          What else?
        </p>
        <div className="mt-20 h-auto w-full xl:flex xl:flex-wrap">
          <div className="mb-24 h-auto w-full md:flex md:w-full xl:w-2/4">
            <div className="mb-5 h-28 w-28 rounded-full border bg-purple-300 sm:mb-0"></div>
            <div className="w-96 sm:ml-5 sm:px-4">
              <p className="text-2xl font-semibold text-[#3F3665]">
                Searching inspiration made easy
              </p>
              <p className="text-base font-normal text-[#593C71] sm:mt-6">
                We always don’t have exact words for what we are looking for.
                That’s why our search is powered with useful description and
                tags with each interaction
              </p>
            </div>
          </div>
          <div className="mb-24 h-auto w-full md:flex md:w-full xl:w-2/4">
            <div className="mb-5 h-28 w-28 rounded-full border bg-purple-300 sm:mb-0"></div>
            <div className="w-96 sm:ml-5 sm:px-4">
              <p className="text-2xl font-semibold text-[#3F3665]">
                Inspirations from geeks across the world
              </p>
              <p className="text-base font-normal text-[#593C71] sm:mt-6">
                Interactions categorised by UI pattern and flows. Added with
                filter based on industry like Fintech, Social media, Delievery
                plaftorms, Heathcare, etc.
              </p>
            </div>
          </div>
          <div className="mb-24 h-auto w-full md:flex md:w-full xl:w-2/4">
            <div className="mb-5 h-28 w-28 rounded-full border bg-purple-300 sm:mb-0"></div>
            <div className="w-96 sm:ml-5 sm:px-4">
              <p className="text-2xl font-semibold text-[#3F3665]">
                Exchange views & insights
              </p>
              <p className="text-base font-normal text-[#593C71] sm:mt-6">
                Use comments and surveys for healthy discussions that improve
                our collective knowledge and perspectives
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 flex w-full flex-col items-center bg-[#2E2B5B] py-20">
        <div className="max-w-sm sm:max-w-full sm:text-center">
          <p className="text-4xl font-bold text-white">
            Wanna show your inspirations to the world?
          </p>
          <p className="mt-10 text-base font-normal text-white sm:mt-2">
            Signup and be a part of community which inspires each other
          </p>
        </div>
        <div className="mt-8 flex justify-end">
          <input
            type="email"
            placeholder="Enter email address"
            className="h-14 w-64 rounded-l-full px-5"
          />
          <Link
            to="#"
            className="flex h-14 w-24 items-center justify-center rounded-r-full bg-indigo-600 text-base font-bold text-white"
          >
            Signup
          </Link>
        </div>
        <div className="mt-28 h-auto w-4/5 justify-between sm:flex 2xl:max-w-screen-2xl">
          <DesignBitsLogo />
          <div>logos</div>
        </div>
        <div className="mt-10 h-auto w-4/5 justify-between lg:flex 2xl:max-w-screen-2xl">
          <div className="mb-8 flex flex-col text-sm font-normal text-[#928EE1] sm:flex sm:flex-row">
            <Link to="#" className="mr-5">
              About us
            </Link>
            <Link to="#" className="mr-5">
              Why DesignBits
            </Link>
            <Link to="#" className="mr-5">
              Join us
            </Link>
          </div>
          <div className="text-sm font-normal text-[#928EE1]">
            COPYRIGHT © 2021 - Designbits, India • Privacy • Terms
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing

type ExploreLandingProps = {
  title: string
  description: string
  btn1: string
  btn2: string
  btn3: string
  seeMore: string
}

export const ExploreLanding = (props: ExploreLandingProps) => {
  return (
    <div className="mt-24 flex-col text-gray-800">
      <div className="mx-auto max-w-sm md:max-w-full">
        <p className="mb-2 text-2xl font-bold sm:text-5xl">{props.title}</p>
        <p className="max-w-3xl text-base font-normal">{props.description}</p>
      </div>
      <div className="mt-4 flex items-center overflow-x-scroll py-3 px-1 pl-4">
        <div className="mr-1 inline-block whitespace-nowrap rounded-full">
          <Button size="medium" type="ghost" rounded="full">
            {props.btn1}
          </Button>
        </div>
        <div className="mr-1 inline-block whitespace-nowrap">
          <Button size="medium" type="ghost" rounded="full">
            {props.btn2}
          </Button>
        </div>
        <div className="mr-1 inline-block whitespace-nowrap">
          <Button size="medium" type="ghost" rounded="full">
            {props.btn3}
          </Button>
        </div>
        <div className="mr-1 inline-block whitespace-nowrap">
          <Button size="medium" type="link" href="/explore/all" rounded="full">
            {props.seeMore}
          </Button>
        </div>
      </div>
      <div className="mt-5 flex flex-nowrap overflow-scroll pl-4 sm:h-auto sm:w-full sm:justify-between">
        <div className="mr-5 rounded-lg bg-green-300 p-36">AAAAA</div>
        <div className="mr-5 rounded-lg bg-green-300 p-36">BBBBB</div>
        <div className="mr-5 rounded-lg bg-green-300 p-36">CCCCC</div>
      </div>
    </div>
  )
}
