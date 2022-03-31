import { Platfrom } from "@prisma/client"
import AndroidIcon from "~/components/icons/Android"
import IOSIcon from "~/components/icons/iOS"
import WebIcon from "~/components/icons/Web"

const normalizedPlatformName = {
  ANDROID: {
    name: "Android",
    icon: <AndroidIcon />,
  },
  IOS: {
    name: "iOS",
    icon: <IOSIcon />,
  },
  WEB: {
    name: "Web",
    icon: <WebIcon />,
  },
}

type Props = {
  platform: Platfrom
}

const Platform = ({ platform }: Props) => {
  const platformData = normalizedPlatformName[platform]
  return (
    <div className="flex space-x-2 text-gray-800">
      {platformData.icon}
      <span>{platformData.name}</span>
    </div>
  )
}

export default Platform
