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
import { useRootContext } from "~/context-modules/RootContext"
import ProfileDropdown from "./NavBar/ProfileDropdown"
import { RemixLinkProps } from "@remix-run/react/components"
import { Modal } from "./common/Modal"

const userNavigation: {
  name: string
  href: string
  prefetch?: RemixLinkProps["prefetch"]
}[] = [
  // { name: "Sign out", href: "/auth/logout", prefetch: "none" },
]

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
  // { name: "Liked", href: "/liked/", icon: <LikeIcon {...iconProps} /> },
  // {
  //   name: "My Uploads",
  //   href: "/my-uploads/",
  //   icon: <GalleryIcon {...iconProps} />,
  // },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const {
    rootState: { user, isAuthModalOpen, postSlug },
    openAuthModal,
  } = useRootContext()
  return (
    <>
      <div className="min-h-full bg-white dark:bg-gray-900">
        <Disclosure as="nav" className="bg-white shadow-sm">
          {({ open }) => (
            <>
              <div className="px-4">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <div className="flex w-40 shrink-0 items-center lg:w-56">
                      <Link prefetch="intent" to="/" className="px-2">
                        <DesignBitsLogo />
                      </Link>
                    </div>
                    <nav
                      role="navigation"
                      aria-label="main-nav"
                      className="hidden sm:-my-px sm:flex sm:space-x-8"
                    >
                      {navigation.map(item => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) =>
                            classNames(
                              isActive
                                ? "border-indigo-700 font-semibold text-indigo-700"
                                : "border-transparent text-gray-500 hover:text-indigo-500",
                              "inline-flex items-center space-x-2 border-b-2 px-1 pt-1 text-sm font-medium",
                            )
                          }
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </NavLink>
                      ))}
                    </nav>
                  </div>
                  <div className="hidden space-x-6 sm:ml-6 sm:flex sm:items-center">
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
                        className="flex items-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <div className="flex space-x-2">
                          <span>Login</span>
                        </div>
                      </Link>
                    )}
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pt-2 pb-3">
                  {navigation.map(item => (
                    <Disclosure.Button key={item.name} as="div">
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                              : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
                            "block border-l-4 py-2 pl-3 pr-4 text-base font-medium",
                          )
                        }
                      >
                        {item.name}
                      </NavLink>
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4 pb-3">
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
                      className="ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map(item => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block py-2 px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
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
        <Modal
          isOpen={isAuthModalOpen}
          setIsOpen={() => openAuthModal(postSlug ?? "")}
        />
        <div className="flex py-10">{children}</div>
      </div>
    </>
  )
}
