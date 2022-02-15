import debounce from "lodash.debounce"
import React, { useCallback, useState } from "react"
import classNames from "~/utils/classnames"

type Props = {
  src: string
  backgroundColorClass?: string
}

const VideoPlayer = ({ src, backgroundColorClass }: Props) => {
  const [currentProgress, setProgress] = useState(0)

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
          "w-full h-full opacity-50 group-hover:opacity-100 object-cover object-center",
        )}
        onMouseOver={event => (event.target as HTMLVideoElement).play()}
        onMouseOut={event => (event.target as HTMLVideoElement).pause()}
        onTimeUpdate={onTimeUpdate}
      >
        <source src={src} type="video/webm" />
      </video>
      <progress
        id="progress"
        max="100"
        value={currentProgress}
        className="absolute bottom-0 z-10 w-full h-1 bg-gray-200"
      >
        Progress
      </progress>
    </>
  )
}

export default VideoPlayer
