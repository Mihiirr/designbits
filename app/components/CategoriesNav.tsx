import { BellIcon, ViewListIcon } from '@heroicons/react/outline'
import React from 'react'
import StackIcon from './icons/Stack'
import { NavLink } from 'remix';
import classNames from '../utils/classnames';
import DataDisplayIcon from './icons/DataDisplay';
import NavigationIcon from './icons/Navigation';
import FeedbackIcon from './icons/Feedback';
import ChatIcon from './icons/Chat';
import ModalIcon from './icons/Modal';
import OnBoardingIcon from './icons/OnBoarding';
import DropdownIcon from './icons/Dropdown';
import FormIcon from './icons/Form';
import ToggleIcon from './icons/Toggle';
import TableIcon from './icons/Table';

interface Props {

}

const routePrefix = "/explore";

const navItems = [
    {
        name: 'All',
        to: "/",
        icon: <StackIcon width="24" height="24" role="presentation" />,
        active: true
    },
    {
        name: 'Lists',
        to: "/lists",
        icon: <ViewListIcon width="24" height="24" role="presentation" />
    },
    {
        name: 'Data display',
        to: "/data-display",
        icon: <DataDisplayIcon width="24" height="24" role="presentation" />
    },
    {
        name: 'Navigation',
        to: "/navigation",
        icon: <NavigationIcon width="24" height="24" role="presentation" />
    },
    {
        name: 'Feedback',
        to: "/feedback",
        icon: <FeedbackIcon width="24" height="24" role="presentation" />
    },
    {
        name: 'Chat',
        to: "/chat",
        icon: <ChatIcon width="24" height="24" role="presentation" />
    },
    {
        name: 'Modal',
        to: "/modal",
        icon: <ModalIcon width="24" height="24" role="presentation" />
    },
    {
        name: 'Onboarding',
        to: "/onboarding",
        icon: <OnBoardingIcon width="24" height="24" role="presentation" />
    },
    {
        name: 'Dropdown',
        to: "/dropdown",
        icon: <DropdownIcon width="24" height="24" role="presentation" />
    },
    {
        name: 'Notification',
        to: "/notification",
        icon: <BellIcon width="24" height="24" role="presentation" />
    },
    {
        name: 'Forms',
        to: "/forms",
        icon: <FormIcon width="24" height="24" role="presentation" />
    },
    {
        name: 'Toggles',
        to: "/toggles",
        icon: <ToggleIcon width="24" height="24" role="presentation" />
    },
    {
        name: 'Tables',
        to: "/tables",
        icon: <TableIcon width="24" height="24" role="presentation" />
    },
]

const CategoriesNav = (props: Props) => {
    return (
        <nav className="space-y-2 text-sm">
            {navItems.map(({ name, to, icon }) =>
                <NavLink
                    key={name}
                    to={routePrefix + to}
                    className={({ isActive }) => classNames("flex items-center space-x-2 px-2 py-2.5 mx-4 rounded-md font-medium text-gray-500 hover:bg-indigo-50 hover:text-gray-700", isActive ? "bg-indigo-100 text-indigo-700 font-semibold" : "")}
                >
                    {icon}
                    <span>{name}</span>
                </NavLink>
            )}
        </nav>
    )
}

export default CategoriesNav
