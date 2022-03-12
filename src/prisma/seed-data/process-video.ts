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
  size: string
  sizeName: VideoSize
}

export const outputConfigs: OutPutConfigOp[] = [
  {
    ext: "webm",
    size: "320x240",
    sizeName: VideoSize.THUMBNAIL_240P,
  },
  {
    ext: "webm",
    size: "480x360",
    sizeName: VideoSize.SMALL_360P,
  },
  {
    ext: "webm",
    size: "640x480",
    sizeName: VideoSize.MEDIUM_480P,
  },
  {
    ext: "webm",
    size: "1280x720",
    sizeName: VideoSize.LARGE_720P,
  },
  {
    ext: "webm",
    size: "1920x1080",
    sizeName: VideoSize.HIGH_RES_1080P,
  },
  {
    ext: "mp4",
    size: "320x240",
    sizeName: VideoSize.THUMBNAIL_240P,
  },
  {
    ext: "mp4",
    size: "480x360",
    sizeName: VideoSize.SMALL_360P,
  },
  {
    ext: "mp4",
    size: "640x480",
    sizeName: VideoSize.MEDIUM_480P,
  },
  {
    ext: "mp4",
    size: "1280x720",
    sizeName: VideoSize.LARGE_720P,
  },
  {
    ext: "mp4",
    size: "1920x1080",
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

export const processVideo = async (
  inputPath: string,
  outputFormats: OutPutConfigOp[] = outputConfigs,
): Promise<
  {
    fileName: string
    format: string
    sizeName: string
  }[]
> => {
  return new Promise(async (resolve, reject) => {
    const { durationInSeconds: videoDurationInSeconds, size: inputVideoSize } =
      await getVideoInfo(inputPath)

    console.log(inputVideoSize)

    if (videoDurationInSeconds === undefined) {
      return reject(new Error("Could not get video duration"))
    }

    const outputFolder = path.join(path.dirname(inputPath), "processed")
    const fileName = path.parse(inputPath).name

    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder)
    }

    if (process.env.SKIP_PROCESSING) {
      resolve(
        outputFormats.map(({ size, ext, sizeName }) => {
          const outFileName = `${fileName}-${size}.${ext}`
          console.log("created: " + outFileName)
          return {
            fileName: outFileName,
            sizeName,
            format: ext,
          }
        }),
      )
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
              `${fileName}-${outputFormat.size}.${outputFormat.ext}`,
            ),
          )
          .size(outputFormat.size)
          .autopad()
          .fps(120)
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
            const outFileName = `${fileName}-${size}.${ext}`
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
