import { Disclosure, Menu, Transition } from "@headlessui/react"
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

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
}

const iconProps = {
  height: "24",
  width: "24",
}

const navigation = [
  { name: "Explore", href: "/explore", icon: <ExploreIcon {...iconProps} /> },
  {
    name: "Collections",
    href: "/collections",
    icon: <CollectionsIcon {...iconProps} />,
  },
  { name: "Liked", href: "/liked", icon: <LikeIcon {...iconProps} /> },
  {
    name: "My Uploads",
    href: "/my-uploads",
    icon: <GalleryIcon {...iconProps} />,
  },
]

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white shadow-sm">
          {({ open }) => (
            <>
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <div className="flex flex-shrink-0 items-center w-56">
                      <Link to="/" className="px-2">
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
                    <Button>
                      <div className="flex space-x-2">
                        <UploadIcon />
                        <span>Upload</span>
                      </div>
                    </Button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative">
                      <div>
                        <Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="w-8 h-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 mt-2 py-1 w-48 bg-white rounded-md focus:outline-none shadow-lg origin-top-right ring-1 ring-black ring-opacity-5">
                          {userNavigation.map(item => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-gray-700 text-sm",
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="flex items-center -mr-2 sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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
                <div className="pb-3 pt-2 space-y-1">
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
                <div className="pb-3 pt-4 border-t border-gray-200">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <DesignBitsLogo />
                    </div>
                    <div className="ml-3">
                      <div className="text-gray-800 text-base font-medium">
                        {user.name}
                      </div>
                      <div className="text-gray-500 text-sm font-medium">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="flex-shrink-0 ml-auto p-1 text-gray-400 hover:text-gray-500 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
                        className="block px-4 py-2 text-gray-500 hover:text-gray-800 text-base font-medium hover:bg-gray-100"
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
