import "source-map-support/register";
import { SNSHandler, SNSEventRecord, S3EventRecord } from "aws-lambda";
import { forEach } from "p-iteration";

import { S3Service } from "@libs/s3";
import { processVideo } from "src/services/processVideo";
import { VIDEO_EXTENSIONS, VIDEO_TYPES } from "@libs/enums";

/**
 * To resize & compress images which newly added to a specific folders.
 *
 * @param event
 * @param context
 */
export const mp4ToWebMSameSize: SNSHandler = async (event) => {
  console.log({ event });
  // Fail on mising data
  if (event.Records === null) {
    throw new Error("Error: Event has no records.");
  }

  const s3 = new S3Service();

  return forEach(event.Records, async (record: SNSEventRecord) => {
    console.log("calling api for er: ", { record });
    const eventRecords = JSON.parse(record.Sns.Message)
      .Records as S3EventRecord[];
    await forEach(eventRecords, async (eventRecord) => {
      await processVideo({
        s3,
        bucket: eventRecord.s3.bucket.name,
        key: eventRecord.s3.object.key,
        outputFormat: VIDEO_EXTENSIONS.WebM,
      });
    });
  });
};

/**
 * To resize & compress images which newly added to a specific folders.
 *
 * @param event
 * @param context
 */
export const generatePreviewSizeMP4: SNSHandler = async (event) => {
  // Fail on mising data
  if (event.Records === null) {
    throw new Error("Error: Event has no records.");
  }

  const s3 = new S3Service();

  return forEach(event.Records, async (record: SNSEventRecord) => {
    console.log("calling api for er: ", { record });
    const eventRecords = JSON.parse(record.Sns.Message)
      .Records as S3EventRecord[];
    await forEach(eventRecords, async (eventRecord) => {
      await processVideo({
        s3,
        bucket: eventRecord.s3.bucket.name,
        key: eventRecord.s3.object.key,
        size: VIDEO_TYPES.preview,
        outputFormat: VIDEO_EXTENSIONS.MP4,
      });
    });
  });
};

/**
 * To resize & compress images which newly added to a specific folders.
 *
 * @param event
 * @param context
 */
export const generatePreviewSizeWebM: SNSHandler = async (event) => {
  // Fail on mising data
  if (event.Records === null) {
    throw new Error("Error: Event has no records.");
  }

  const s3 = new S3Service();

  return forEach(event.Records, async (record: SNSEventRecord) => {
    console.log("calling api for er: ", { record });
    const eventRecords = JSON.parse(record.Sns.Message)
      .Records as S3EventRecord[];
    await forEach(eventRecords, async (eventRecord) => {
      await processVideo({
        s3,
        bucket: eventRecord.s3.bucket.name,
        key: eventRecord.s3.object.key,
        size: VIDEO_TYPES.preview,
        outputFormat: VIDEO_EXTENSIONS.WebM,
      });
    });
  });
};

// /**
//  * To delete thumbnails when the original image is deleted.
//  *
//  * @param event
//  * @param context
//  */
// export const deleted: S3Handler = async (event, context) => {
//   // Fail on mising data
//   if (event.Records === null) {
//     context.fail("Error: Event has no records.");
//     return;
//   }

//   const s3 = new S3Service();

//   return forEach(event.Records, async (record: S3EventRecord) => {
//     await deleteProcessedImages({
//       s3,
//       bucket: record.s3.bucket.name,
//       key: record.s3.object.key,
//     });
//   });
// };

// /**
//  * To migrate legacy images, the incremental images should be processed by "newAdded" handler.
//  *
//  * @param event
//  * @param context
//  */
// export const migrate: APIGatewayProxyHandler = async (event) => {
//   const s3 = new S3Service();
//   const bucket = process.env.BUCKET;
//   const data = JSON.parse(event.body) as { bucket: string; key: string };

//   if (data.bucket !== bucket) {
//     return {
//       statusCode: 400,
//       body: JSON.stringify(
//         {
//           message: '"bucket" is invalid.',
//         },
//         null,
//         2
//       ),
//     };
//   }

//   if (!data.key) {
//     return {
//       statusCode: 400,
//       body: JSON.stringify(
//         {
//           message: '"key" is required.',
//         },
//         null,
//         2
//       ),
//     };
//   }

//   try {
//     await processImage({
//       s3,
//       bucket,
//       key: data.key,
//     });
//   } catch (err) {
//     console.error(err);
//     return {
//       statusCode: 400,
//       body: JSON.stringify(
//         {
//           message: `Failed to process ${data.key}`,
//         },
//         null,
//         2
//       ),
//     };
//   }

//   return {
//     statusCode: 200,
//     body: JSON.stringify(data, null, 2),
//   };
// };
