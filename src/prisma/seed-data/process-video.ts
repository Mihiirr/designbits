import Ffmpeg from "fluent-ffmpeg"
import * as path from "path"
import * as fs from "fs"
import { VideoSize } from "@prisma/client"
// import cliProgress from "cli-progress"
// import colors from "ansi-colors"

export const getVideoInfo = async (
  inputPath: string,
): Promise<{
  size: number | undefined
  durationInSeconds: number | undefined
  width: number
  height: number
  isVertical: boolean
}> => {
  return new Promise((resolve, reject) => {
    return Ffmpeg.ffprobe(inputPath, (error, videoInfo) => {
      if (error) {
        return reject(error)
      }

      const { duration, size } = videoInfo.format
      const { width = 0, height = 0 } = videoInfo.streams[0]

      const isVertical = height > width

      return resolve({
        size,
        durationInSeconds:
          duration !== undefined ? Math.floor(duration) : duration,
        width,
        height,
        isVertical,
      })
    })
  })
}

export type OutPutConfigOp = {
  ext: string
  size: { height: number; width: number }
  sizeName: VideoSize
}

export const outputConfigs: OutPutConfigOp[] = [
  {
    ext: "webm",
    size: {
      height: 320,
      width: 240,
    },
    sizeName: VideoSize.THUMBNAIL_240P,
  },
  {
    ext: "webm",
    size: {
      height: 480,
      width: 360,
    },
    sizeName: VideoSize.SMALL_360P,
  },
  {
    ext: "webm",
    size: {
      height: 640,
      width: 480,
    },
    sizeName: VideoSize.MEDIUM_480P,
  },
  {
    ext: "webm",
    size: {
      height: 1280,
      width: 720,
    },
    sizeName: VideoSize.LARGE_720P,
  },
  {
    ext: "webm",
    size: {
      height: 1920,
      width: 1080,
    },
    sizeName: VideoSize.HIGH_RES_1080P,
  },
  {
    ext: "mp4",
    size: {
      height: 320,
      width: 240,
    },
    sizeName: VideoSize.THUMBNAIL_240P,
  },
  {
    ext: "mp4",
    size: {
      height: 480,
      width: 360,
    },
    sizeName: VideoSize.SMALL_360P,
  },
  {
    ext: "mp4",
    size: {
      height: 640,
      width: 480,
    },
    sizeName: VideoSize.MEDIUM_480P,
  },
  {
    ext: "mp4",
    size: {
      height: 1280,
      width: 720,
    },
    sizeName: VideoSize.LARGE_720P,
  },
  {
    ext: "mp4",
    size: {
      height: 1920,
      width: 1080,
    },
    sizeName: VideoSize.HIGH_RES_1080P,
  },
]

// const formatter: cliProgress.GenericFormatter = (options, params, payload) => {
//   // bar grows dynamically by current progress - no whitespaces are added
//   const bar = options?.barCompleteString?.substr(
//     0,
//     Math.round(params.progress * (options?.barsize || 0)),
//   )

//   // end value reached ?
//   // change color to green when finished
//   if (params.value >= params.total) {
//     return (
//       "# " +
//       colors.grey(payload.task) +
//       "   " +
//       colors.green(params.value + "/" + params.total) +
//       " --[" +
//       bar +
//       "]-- "
//     )
//   } else {
//     return (
//       "# " +
//       payload.task +
//       "   " +
//       colors.yellow(params.value + "/" + params.total) +
//       " --[" +
//       bar +
//       "]-- "
//     )
//   }
// }
// const multibar = new cliProgress.MultiBar(
//   {
//     clearOnComplete: false,
//     hideCursor: true,
//     format: formatter,
//   },
//   cliProgress.Presets.shades_grey,
// )

const getSize = (
  outputHeight: number,
  outputWidth: number,
  inputHeight: number,
  inputWidth: number,
) => {
  console.log({
    outputHeight,
    outputWidth,
    inputHeight,
    inputWidth,
  })
  if (inputHeight < outputHeight && inputWidth < outputWidth) {
    return `${inputWidth}x${inputHeight}`
  }
  return `${inputHeight < outputWidth ? "?" : outputWidth}x${
    inputHeight < outputHeight ? "?" : outputHeight
  }`
}

export const processVideo = async (
  inputPath: string,
  outputFormats: OutPutConfigOp[] = outputConfigs,
  postTitle?: string,
): Promise<
  {
    fileName: string
    format: string
    sizeName: string
  }[]
> => {
  return new Promise(async (resolve, reject) => {
    const outputFolder = path.join(path.dirname(inputPath), "processed")
    const fileName = path.parse(inputPath).name

    if (process.env.SKIP_PROCESSING) {
      return resolve(
        outputFormats.map(({ size, ext, sizeName }) => {
          const outFileName = `${fileName}-${size.width}x${size.height}.${ext}`
          console.log(`created: ${postTitle} ` + outFileName)
          return {
            fileName: outFileName,
            sizeName,
            format: ext,
          }
        }),
      )
    }

    const {
      durationInSeconds: videoDurationInSeconds,
      height: inputHeight,
      width: inputWidth,
    } = await getVideoInfo(inputPath)

    if (videoDurationInSeconds === undefined) {
      return reject(new Error("Could not get video duration"))
    }

    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder)
    }

    const outputCommands = (
      chain: Ffmpeg.FfmpegCommand,
    ): Ffmpeg.FfmpegCommand => {
      return outputFormats.reduce((chain, outputFormat) => {
        // const b = multibar.create(100, 0, {
        //   task: `${fileName}-${outputFormat.size}.${outputFormat.ext}`,
        // })
        return chain
          .output(
            path.join(
              outputFolder,
              `${fileName}-${outputFormat.size.width}x${outputFormat.size.height}.${outputFormat.ext}`,
            ),
          )
          .size(
            getSize(
              outputFormat.size.height,
              outputFormat.size.width,
              inputHeight,
              inputWidth,
            ),
          )
          .on("progress", progress => {
            // console.log("Processing: " + progress.percent + "% done")
            // b.update(progress.percent, {
            //   task: `${fileName}-${outputFormat.size}.${outputFormat.ext}`,
            // })
          })
      }, chain)
    }

    return outputCommands(
      Ffmpeg()
        .input(inputPath)
        // .inputOptions([`-ss ${startTimeInSeconds}`])
        //   .outputOptions([`-t ${fragmentDurationInSeconds}`])
        .noAudio(),
    )
      .on("end", () =>
        resolve(
          outputFormats.map(({ size, ext, sizeName }) => {
            const outFileName = `${fileName}-${size.width}x${size.height}.${ext}`
            console.log("created: " + outFileName)
            return {
              fileName: outFileName,
              sizeName,
              format: ext,
            }
          }),
        ),
      )
      .on("error", reject)
      .run()
  })
}
// processVideo(
//   path.join(__dirname, "interactions/cl0na8oxo0013b1sq6os2ev8m.mp4"),

// )
