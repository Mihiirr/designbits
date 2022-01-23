import DesignBitsLogo from "../Logo"

interface Props {
  title: string
}

const AuthHeading = ({ title }: Props) => {
  return (
    <div>
      <DesignBitsLogo height={40} />
      <h2 className="mt-6 text-3xl font-extrabold text-gray-900">{title}</h2>
    </div>
  )
}

export default AuthHeading
