import { Menu, Transition } from "@headlessui/react"
import { User } from "@prisma/client"
import { RemixLinkProps } from "@remix-run/react/components"
import { Fragment } from "react"
import { Link } from "remix"
import classNames from "~/utils/classnames"

type Props = {
  user: User
  navigationMenu: {
    name: string
    href: string
    prefetch?: RemixLinkProps["prefetch"]
  }[]
}

const ProfileDropdown = ({ user, navigationMenu }: Props) => {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="sr-only">Open user menu</span>
          <img
            className="w-8 h-8 rounded-full"
            src={user?.profilePicture ?? ""}
            alt=""
            referrerPolicy="no-referrer"
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
        <Menu.Items className="absolute right-0 py-1 mt-2 w-48 bg-white rounded-md focus:outline-none ring-1 ring-black/5 shadow-lg origin-top-right">
          {navigationMenu.map(item => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <Link
                  to={item.href}
                  prefetch={item.prefetch || "none"}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-gray-700 text-sm",
                  )}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default ProfileDropdown
