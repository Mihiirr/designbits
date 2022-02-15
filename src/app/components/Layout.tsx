import { Disclosure } from "@headlessui/react"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { Fragment } from "react"
import DesignBitsLogo from "./Logo"
import classNames from "../utils/classnames"
import Link from "./Link"
import ExploreIcon from "./icons/Explore"
import CollectionsIcon from "./icons/Collections"
import GalleryIcon from "./icons/Gallery"
import LikeIcon from "./icons/Like"
import SearchBox from "./SearchBox"
import Button from "./Button"
import UploadIcon from "./icons/Upload"
import { NavLink } from "remix"
import { useRootContext } from "~/context/root"
import ProfileDropdown from "./NavBar/ProfileDropdown"
import { RemixLinkProps } from "@remix-run/react/components"

const userNavigation: {
  name: string
  href: string
  prefetch?: RemixLinkProps["prefetch"]
}[] = [{ name: "Sign out", href: "/auth/logout", prefetch: "none" }]

const iconProps = {
  height: "24",
  width: "24",
}

const navigation = [
  { name: "Explore", href: "/explore", icon: <ExploreIcon {...iconProps} /> },
  {
    name: "Collections",
    href: "/collections/",
    icon: <CollectionsIcon {...iconProps} />,
  },
  { name: "Liked", href: "/liked/", icon: <LikeIcon {...iconProps} /> },
  {
    name: "My Uploads",
    href: "/my-uploads/",
    icon: <GalleryIcon {...iconProps} />,
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const {
    rootState: { user },
  } = useRootContext()
  return (
    <>
      <div className="min-h-full bg-white dark:bg-gray-900">
        <Disclosure as="nav" className="bg-white shadow-sm">
          {({ open }) => (
            <>
              <div className="px-4">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <div className="flex shrink-0 items-center w-40 lg:w-56">
                      <Link prefetch="intent" to="/" className="px-2">
                        <DesignBitsLogo />
                      </Link>
                    </div>
                    <nav
                      role="navigation"
                      aria-label="main-nav"
                      className="hidden sm:flex sm:-my-px sm:space-x-8"
                    >
                      {navigation.map(item => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) =>
                            classNames(
                              isActive
                                ? "border-indigo-700 text-indigo-700 font-semibold"
                                : "border-transparent text-gray-500 hover:text-indigo-500",
                              "inline-flex items-center pt-1 px-1 text-sm font-medium border-b-2 space-x-2",
                            )
                          }
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </NavLink>
                      ))}
                    </nav>
                  </div>
                  <div className="hidden space-x-6 sm:flex sm:items-center sm:ml-6">
                    <SearchBox />
                    {user ? (
                      <>
                        <Button>
                          <div className="flex space-x-2">
                            <UploadIcon />
                            <span>Upload</span>
                          </div>
                        </Button>
                        <ProfileDropdown
                          user={user}
                          navigationMenu={userNavigation}
                        />
                      </>
                    ) : (
                      <Link
                        to="/auth/login"
                        prefetch="intent"
                        className="flex items-center py-2 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <div className="flex space-x-2">
                          <span>Login</span>
                        </div>
                      </Link>
                    )}
                  </div>
                  <div className="flex items-center -mr-2 sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block w-6 h-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="pt-2 pb-3 space-y-1">
                  {navigation.map(item => (
                    <Disclosure.Button key={item.name} as="div">
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                              : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                            "block pl-3 pr-4 py-2 text-base font-medium border-l-4",
                          )
                        }
                      >
                        {item.name}
                      </NavLink>
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex items-center px-4">
                    <div className="shrink-0">
                      <DesignBitsLogo />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {user?.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {user?.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="shrink-0 p-1 ml-auto text-gray-400 hover:text-gray-500 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map(item => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block py-2 px-4 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="flex py-10">{children}</div>
      </div>
    </>
  )
}
