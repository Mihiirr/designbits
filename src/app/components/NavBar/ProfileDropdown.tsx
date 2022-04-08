import { Menu, Transition } from "@headlessui/react"
import { User } from "@prisma/client"
import { RemixLinkProps } from "@remix-run/react/components"
import { Fragment } from "react"
import { Link } from "remix"
import classNames from "~/utils/classnames"
import SignoutButton from "../SignoutButton"
import UserAvatar from "./UserAvatar"

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
        <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="sr-only">Open user menu</span>
          {user?.profilePicture ? (
            <img
              className="h-8 w-8 rounded-full"
              src={user?.profilePicture}
              alt=""
              referrerPolicy="no-referrer"
            />
          ) : (
            <>{user.name && <UserAvatar userName={user?.name} />}</>
          )}
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
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
          {navigationMenu.map(item => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <Link
                  to={item.href}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700",
                  )}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}
          <Menu.Item>
            {({ active }) => <SignoutButton active={active} />}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default ProfileDropdown
