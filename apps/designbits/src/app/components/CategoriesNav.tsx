import { BellIcon, ViewListIcon } from "@heroicons/react/outline"
import StackIcon from "./icons/Stack"
import { NavLink } from "remix"
import classNames from "../utils/classnames"
import DataDisplayIcon from "./icons/DataDisplay"
import NavigationIcon from "./icons/Navigation"
import FeedbackIcon from "./icons/Feedback"
import ChatIcon from "./icons/Chat"
import ModalIcon from "./icons/Modal"
import OnBoardingIcon from "./icons/OnBoarding"
import DropdownIcon from "./icons/Dropdown"
import FormIcon from "./icons/Form"
import ToggleIcon from "./icons/Toggle"
import TableIcon from "./icons/Table"

export const navItems = [
  {
    name: "All",
    to: "/explore/all",
    id: "all",
    icon: <StackIcon width="24" height="24" role="presentation" />,
    active: true,
  },
  {
    name: "Lists",
    to: "/explore/lists/",
    id: "lists",
    icon: <ViewListIcon width="24" height="24" role="presentation" />,
  },
  {
    name: "Data display",
    to: "/explore/data-display/",
    id: "data-display",
    icon: <DataDisplayIcon width="24" height="24" role="presentation" />,
  },
  {
    name: "Navigation",
    to: "/explore/navigation/",
    id: "navigation",
    icon: <NavigationIcon width="24" height="24" role="presentation" />,
  },
  {
    name: "Feedback",
    to: "/explore/feedback/",
    id: "feedback",
    icon: <FeedbackIcon width="24" height="24" role="presentation" />,
  },
  {
    name: "Chat",
    to: "/explore/chat/",
    id: "chat",
    icon: <ChatIcon width="24" height="24" role="presentation" />,
  },
  {
    name: "Modal",
    to: "/explore/modal/",
    id: "modal",
    icon: <ModalIcon width="24" height="24" role="presentation" />,
  },
  {
    name: "Onboarding",
    to: "/explore/onboarding/",
    id: "onboarding",
    icon: <OnBoardingIcon width="24" height="24" role="presentation" />,
  },
  {
    name: "Dropdown",
    to: "/explore/dropdown/",
    id: "dropdown",
    icon: <DropdownIcon width="24" height="24" role="presentation" />,
  },
  {
    name: "Notification",
    to: "/explore/notification/",
    id: "notification",
    icon: <BellIcon width="24" height="24" role="presentation" />,
  },
  {
    name: "Forms",
    to: "/explore/forms/",
    id: "forms",
    icon: <FormIcon width="24" height="24" role="presentation" />,
  },
  {
    name: "Toggles",
    to: "/explore/toggles/",
    id: "toggles",
    icon: <ToggleIcon width="24" height="24" role="presentation" />,
  },
  {
    name: "Tables",
    to: "/explore/tables/",
    id: "tables",
    icon: <TableIcon width="24" height="24" role="presentation" />,
  },
]

const CategoriesNav = () => {
  return (
    <nav className="space-y-2 text-sm">
      {navItems.map(({ name, to, icon }) => (
        <NavLink
          key={name}
          to={to}
          className={({ isActive }) =>
            classNames(
              "flex items-center mx-4 px-2 py-2.5 text-gray-500 hover:text-gray-700 font-medium hover:bg-indigo-50 rounded-md space-x-2",
              isActive ? "bg-indigo-100 text-indigo-700 font-semibold" : "",
            )
          }
        >
          {icon}
          <span>{name}</span>
        </NavLink>
      ))}
    </nav>
  )
}

export default CategoriesNav
