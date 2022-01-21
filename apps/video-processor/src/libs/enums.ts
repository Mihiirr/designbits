/**
 * Tagging
 *
 * @see {@url https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html}
 */
export const TAG_VERSION_KEY = "PostProcessingVersion";
export const TAG_VERSION_VALUE = "v1";

/**
 * Output folder
 */
export const VIDEO_FOLDER_OUT = "processed";

/**
 * Support image types (same as folder name)
 */
export enum VIDEO_TYPES {
  preview = "preview",
  //   highRes = "highRes",
}

/**
 * Supported image filename extension
 */
export enum VIDEO_EXTENSIONS {
  MP4 = "mp4",
  WebM = "webm",
}

/**
 * Maximum image size in width
 */
export const IMAGE_WIDTH_LIMIT = 1400;

/**
 * Target image sizes
 */
export type VIDEO_SIZE = { width: number; height?: number };
export const VIDEO_SIZES: {
  [key in VIDEO_TYPES]: VIDEO_SIZE;
} = {
  preview: { width: 380, height: 214 },
  //   profileCover: [
  //     { width: 540, height: null },
  //     { width: 1080, height: null },
  //   ],
  //   cover: [
  //     { width: 144, height: 144 },
  //     { width: 360, height: null },
  //     { width: 540, height: null },
  //     { width: 1080, height: null },
  //   ],
  //   embed: [
  //     { width: 144, height: 144 },
  //     { width: 360, height: null },
  //     { width: 540, height: null },
  //     { width: 1080, height: null },
  //   ],
  //   tagCover: [
  //     { width: 144, height: 144 },
  //     { width: 360, height: null },
  //     { width: 540, height: null },
  //     { width: 1080, height: null },
  //   ],
  //   circleAvatar: [{ width: 144, height: 144 }],
  //   circleCover: [
  //     { width: 144, height: 144 },
  //     { width: 360, height: null },
  //     { width: 540, height: null },
  //     { width: 1080, height: null },
  //   ],
  //   topicCover: [
  //     { width: 144, height: 144 },
  //     { width: 360, height: null },
  //     { width: 540, height: null },
  //     { width: 1080, height: null },
  //   ],
};
