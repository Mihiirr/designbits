import sharp from "sharp"
import type { FormatEnum } from "sharp"
import * as path from "path"
import * as fs from "fs"
import pMap from "p-map"

export type AllowedFormat = keyof FormatEnum
type ImageSize = {
  width: number
  height: number
}
const defaultSize = {
  width: 24,
  height: 24,
}
const formats: AllowedFormat[] = ["png", "webp"]
const sizes: {
  [x in SizeName]: ImageSize
} = {
  default: defaultSize,
  "2x": {
    width: 48,
    height: 48,
  },
  "3x": {
    width: 72,
    height: 72,
  },
  "4x": {
    width: 96,
    height: 96,
  },
}

export type SizeName = "default" | "2x" | "3x" | "4x"

type GenerateImageProps = {
  input: string
  outputFolder?: string
  sizeName?: SizeName
  format: keyof sharp.FormatEnum
}

async function generateImage({
  input,
  outputFolder = "processed",
  sizeName = "default",
  format,
}: GenerateImageProps) {
  const size = sizes[sizeName]

  const { name: fileNameWithOutExt, dir: inputDir } = path.parse(input)
  const outputhPath = path.join(inputDir, outputFolder)

  if (!fs.existsSync(outputhPath)) {
    fs.mkdirSync(outputhPath)
  }

  const fullFileName = `${fileNameWithOutExt}-${sizeName}.${format}`

  const outputFileNameFullPath = path.join(outputhPath, fullFileName)

  await sharp(input)
    .resize(size.width, size.height)
    .toFile(outputFileNameFullPath)

  return { outputFileNameFullPath, sizeName, format, fullFileName }
}

async function processImage(input: string): Promise<
  {
    outputFileNameFullPath: string
    fullFileName: string
    sizeName: SizeName
    format: keyof sharp.FormatEnum
  }[]
> {
  const sizeKeys = Object.keys(sizes) as SizeName[]

  type Config = {
    format: AllowedFormat
    sizeKey: SizeName
  }

  const configs: Config[] = []
  formats.forEach(format =>
    sizeKeys.forEach(sizeKey =>
      configs.push({
        format,
        sizeKey,
      }),
    ),
  )

  return pMap(configs, async ({ format, sizeKey }) => {
    return generateImage({
      input,
      format,
      sizeName: sizeKey,
    })
  })

  // return pProps(
  //   formats.reduce((previousValue, format) => {
  //     const sizeKeys = Object.keys(sizes) as SizeName[]
  //     const filesForAFormat = sizeKeys.reduce((previousValue, sizeName) => {
  //       previousValue[`${format}-${sizeName}`] = generateImage({
  //         input,
  //         format,
  //         sizeName,
  //       })
  //       return previousValue
  //     }, {} as any)
  //     return { ...previousValue, ...filesForAFormat }
  //   }, {} as any),
  // )
}

export default processImage
