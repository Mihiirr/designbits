import * as fs from "fs"
import * as AWS from "aws-sdk"
import type { S3 } from "aws-sdk"
import * as path from "path"

export interface File {
  name: string
  size: number
  type: string
  extension: string
  content: ArrayBuffer
}

const BUCKET_NAME = "designbits-assets-dev"

const s3bucket = new AWS.S3({
  accessKeyId: process.env.S3_UPLOAD_ACCESS_KEY,
  secretAccessKey: process.env.S3_UPLOAD_SECRET_KEY,
  region: "us-east-2",
})

export async function uploadToS3(fileName: string): Promise<any> {
  const readStream = fs.createReadStream(path.join(__dirname, fileName))

  const params: S3.PutObjectRequest = {
    Bucket: BUCKET_NAME,
    Key: `DesignBits/${process.env.S3_FOLDER}/${fileName}`,
    Body: readStream,
    ACL: "public-read",
    CacheControl: "max-age=3600",
  }
  try {
    const data = await s3bucket.upload(params).promise()
    console.log("uploaded file:" + fileName + " \n ")
    console.log({ data })
    return data
  } catch (error) {
    console.warn(error)
    throw error
  } finally {
    readStream.destroy()
  }
}
