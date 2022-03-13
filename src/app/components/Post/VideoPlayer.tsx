import { VideoSource } from "@prisma/client"
import debounce from "lodash.debounce"
import React, { useCallback, useState } from "react"
import classNames from "~/utils/classnames"
import { ASSETS_CDN_LINK } from "~/utils/constants"

type Props = {
  videoSources: Pick<VideoSource, "id" | "size" | "type" | "url">[]
  backgroundColorClass?: string
}

const VideoPlayer = ({ videoSources, backgroundColorClass }: Props) => {
  const [currentProgress, setProgress] = useState(0)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onTimeUpdate = useCallback(
    debounce(event => {
      const videoElement = event.target as HTMLVideoElement
      const newValue =
        videoElement.duration === 0
          ? 0
          : (videoElement.currentTime / videoElement.duration) * 100
      console.log(newValue)
      setProgress(newValue)
    }, 100),
    [],
  )

  return (
    <>
      <video
        loop
        muted
        playsInline
        className={classNames(
          backgroundColorClass || "bg-gray-800",
          "h-full w-full object-cover object-center opacity-50 group-hover:opacity-100",
        )}
        onMouseOver={event => (event.target as HTMLVideoElement).play()}
        onMouseOut={event => (event.target as HTMLVideoElement).pause()}
        onTimeUpdate={onTimeUpdate}
      >
        {videoSources.map(source => (
          <source
            key={source.id}
            src={ASSETS_CDN_LINK + source.url}
            type={source.type}
          />
        ))}
      </video>
      <progress
        id="progress"
        max="100"
        value={currentProgress}
        className="absolute bottom-0 z-10 h-1 w-full bg-gray-200"
      >
        Progress
      </progress>
    </>
  )
}

export default VideoPlayer
