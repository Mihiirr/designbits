import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import DesignBitsLogo from "./Logo";
import classNames from "~/utils/classnames";
import Link from './Link';
import ExploreIcon from './icons/Explore';
import CollectionsIcon from './icons/Collections';
import GalleryIcon from './icons/Gallery';
import LikeIcon from './icons/Like';
import SearchBox from './SearchBox';
import Button from './Button';
import UploadIcon from './icons/Upload';
import CategoriesNav from './CategoriesNav';
import { NavLink } from 'remix';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const iconProps = {
    height: "24",
    width: "24"
}

const navigation = [
    { name: 'Explore', href: '/explore', icon: <ExploreIcon {...iconProps} /> },
    { name: 'Collections', href: '/collections', icon: <CollectionsIcon {...iconProps} /> },
    { name: 'Liked', href: '/liked', icon: <LikeIcon {...iconProps} /> },
    { name: 'My Uploads', href: '/my-uploads', icon: <GalleryIcon {...iconProps} /> },
];

const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
];

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
                                        <div className="flex-shrink-0 w-56 flex items-center">
                                            <Link to="/" className="px-2">
                                                <DesignBitsLogo />
                                            </Link>
                                        </div>
                                        <nav role="navigation" aria-label="main-nav" className="hidden sm:-my-px sm:flex sm:space-x-8">
                                            {navigation.map((item) => (
                                                <NavLink
                                                    key={item.name}
                                                    to={item.href}
                                                    className={({ isActive }) => classNames(
                                                        isActive
                                                            ? 'border-indigo-700 text-indigo-700 font-semibold'
                                                            : 'border-transparent text-gray-500 hover:text-indigo-500',
                                                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium space-x-2'
                                                    )}
                                                >
                                                    {item.icon}
                                                    <span>{item.name}</span>
                                                </NavLink>
                                            ))}
                                        </nav>
                                    </div>
                                    <div className="hidden sm:ml-6 space-x-6 sm:flex sm:items-center">
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
                                                <Menu.Button className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
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
                                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    {userNavigation.map((item) => (
                                                        <Menu.Item key={item.name}>
                                                            {({ active }) => (
                                                                <a
                                                                    href={item.href}
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100' : '',
                                                                        'block px-4 py-2 text-sm text-gray-700'
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
                                    <div className="-mr-2 flex items-center sm:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
                                <div className="pt-2 pb-3 space-y-1">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="div"
                                        >
                                            <NavLink
                                                to={item.href}
                                                className={({ isActive }) => classNames(
                                                    isActive
                                                        ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                                                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                                                    'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                                                )}
                                            >
                                                {item.name}
                                            </NavLink>
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="pt-4 pb-3 border-t border-gray-200">
                                    <div className="flex items-center px-4">
                                        <div className="flex-shrink-0">
                                            <DesignBitsLogo />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium text-gray-800">{user.name}</div>
                                            <div className="text-sm font-medium text-gray-500">{user.email}</div>
                                        </div>
                                        <button
                                            type="button"
                                            className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="mt-3 space-y-1">
                                        {userNavigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
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


                <div className="py-10 flex">
                    {children}
                </div>
            </div>
        </>
    );
}