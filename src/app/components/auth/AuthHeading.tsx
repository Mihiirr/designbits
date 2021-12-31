import React from "react"
import { Link } from "remix"
import DesignBitsLogo from "../Logo"

interface Props {
  title: string
  altLink: string
  altLabel: string
}

const AuthHeading = ({ title, altLabel, altLink }: Props) => {
  return (
    <div>
      <DesignBitsLogo height={40} />
      <h2 className="mt-6 text-3xl font-extrabold text-gray-900">{title}</h2>
      <p className="mt-2 text-sm text-gray-600">
        Or{" "}
        <Link
          to={altLink}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          {altLabel}
        </Link>
      </p>
    </div>
  )
}

export default AuthHeading
