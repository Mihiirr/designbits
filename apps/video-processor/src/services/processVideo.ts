import { S3Service } from "@libs/s3";
import { mkdirSync, readFileSync, unlinkSync, writeFileSync } from "fs";
import { spawnSync } from "child_process";
import {
  VIDEO_SIZE,
  VIDEO_SIZES,
  TAG_VERSION_KEY,
  TAG_VERSION_VALUE,
  VIDEO_EXTENSIONS,
  VIDEO_FOLDER_OUT,
  VIDEO_TYPES,
} from "@libs/enums";
import { changeExt, getKeyWioutExt, toProcessedKey } from "@libs/utils";

/**
 * Process the original image to:
 *
 * 1) Compress
 * 2) Generate thumbnails include WebP versions
 */
export const processVideo = async ({
  s3,
  bucket,
  key,
  size,
  outputFormat,
}: {
  s3: S3Service;
  bucket: string;
  key: string;
  size?: VIDEO_TYPES;
  outputFormat?: VIDEO_EXTENSIONS;
}) => {
  const { keyWioutExt, ext } = getKeyWioutExt({ key });
  console.log(
    `[PROCESSING]: ${key} WITH [OUTPUT FORMAT] = ${
      outputFormat ? outputFormat : ext
    } & [SIZE] : ${size ? size : "same size"}`
  );

  const baseUploadProps = {
    bucket,
    tagging: `${TAG_VERSION_KEY}=${TAG_VERSION_VALUE}`, // mark as processed
  };

  const isSupported = Object.values(VIDEO_EXTENSIONS).some((format) =>
    new RegExp(`[\-\.]${format}$`, "i").test(key)
  );

  const hasValidConversionParams =
    outputFormat !== undefined || size !== undefined;

  if (!hasValidConversionParams) {
    console.log(
      `[SKIP]: ${key} no valid conversion parameters, [outputFormat]: ${outputFormat}, [size]: ${size}`
    );
    return;
  }

  const isAlreadySameFormat = ext === outputFormat && size === undefined;

  if (isAlreadySameFormat) {
    console.log(`[SKIP]: ${key} it's already in the required format`);
    return;
  }

  if (!isSupported) {
    console.log(`[SKIP]: ${key} it's unsupported`);
    return;
  }

  /**
   * Check if it's processed
   */
  const { TagSet: tags } = await s3.getFileTags({ bucket, key });
  console.log({ tags });
  const isProcessedByKey = key.indexOf(`${VIDEO_FOLDER_OUT}/`) >= 0;
  const isProcessedByTag = tags.some(
    (tag) => tag.Key === TAG_VERSION_KEY && tag.Value === TAG_VERSION_VALUE
  );

  if (isProcessedByKey || isProcessedByTag) {
    console.log(`[SKIP]: ${key} already been processed`);
    return;
  }

  // TBC: check object size

  /**
   * Original Images
   */
  console.log("reading file", bucket, key);
  const getFileResult = await s3.getFile({ bucket, key });
  const file = getFileResult.Body as Buffer;

  mkdirSync("/tmp/DesignBits/dev", { recursive: true });

  console.log("start writing file");
  // write file to disk
  writeFileSync(`/tmp/${key}`, file);
  console.log("write file", key);

  const outputFileName = [
    keyWioutExt,
    size ? ["-" + size] : "",
    ".",
    outputFormat !== undefined ? outputFormat : ext,
  ].join("");

  console.log(
    "[CONVERTING FILE] == ",
    "[INPUT]: ",
    key,
    "[OUTPUT]: ",
    outputFileName
  );

  // convert the file!
  const res = spawnSync(
    "/opt/ffmpeg",
    [
      "-i",
      `/tmp/${key}`,
      "-c:v",
      "libvpx-vp9",
      "-crf",
      "30",
      ...(size ? ["-vf", `scale=${VIDEO_SIZES[size].width}:-1`] : []),
      "-b:v",
      "0",
      "-b:a",
      "128k",
      "-c:a",
      "libopus",
      `/tmp/${outputFileName}`,
    ],
    { stdio: "pipe", encoding: "utf-8" }
  );
  console.log(
    "[CONVERTED FILE] == ",
    "[INPUT]: ",
    key,
    "[OUTPUT]: ",
    outputFileName
  );
  console.log(res);

  // read processed file from disk
  const processedFile = readFileSync(`/tmp/${outputFileName}`);

  const processedFileKey = toProcessedKey({
    key: outputFileName,
    subFolder: "_temp",
  });

  await s3.uploadFile({
    ...baseUploadProps,
    body: processedFile,
    key: processedFileKey,
  });

  unlinkSync(`/tmp/${outputFileName}`);
  unlinkSync(`/tmp/${key}`);

  await s3.moveFile({
    srcBucket: bucket,
    srcKey: processedFileKey,
    destBucket: bucket,
    destKey: outputFileName,
  });
};

// /**
//  * Delete thumbnails
//  */
// export const deleteProcessedImages = async ({
//   s3,
//   bucket,
//   key,
// }: {
//   s3: S3Service;
//   bucket: string;
//   key: string;
// }) => {
//   console.log(`[DELETING]: thumbnails of ${key}`);

//   const regexp = new RegExp(`(${Object.values(VIDEO_TYPES).join("|")})\/`);
//   const type = key.match(regexp)[1];
//   const sizes = IMAGE_SIZES[type] as IMAGE_SIZE[];

//   if (!sizes) {
//     console.log(`[SKIP]: ${key} it's supported`);
//     return;
//   }

//   const originalKeyWebP = changeExt({
//     key,
//     ext: VIDEO_EXTENSIONS.webp,
//   });
//   const thumbnailKeys = sizes.map((size) =>
//     toProcessedKey({ key, subFolder: `${size.width}w` })
//   );
//   const thumbnailKeysWebP = sizes.map((size) =>
//     toProcessedKey({
//       key,
//       subFolder: `${size.width}w`,
//       ext: VIDEO_EXTENSIONS.webp,
//     })
//   );
//   const keys = [originalKeyWebP, ...thumbnailKeys, ...thumbnailKeysWebP]
//     // To avoid execution loop
//     .filter((k) => k !== key);

//   return s3.deleteFiles({
//     bucket,
//     objects: keys.map((key) => ({ key })),
//   });
// };
