import { VIDEO_EXTENSIONS, VIDEO_FOLDER_OUT } from "./enums";

export const getKeyWioutExt = ({
  key,
}: {
  key: string;
}): {
  keyWioutExt: string;
  ext?: string;
} => {
  const list = key.split(".");
  const hasExt = list.length > 1;

  if (hasExt) {
    const ext = list.slice(-1)[0] || "";
    return {
      keyWioutExt: key.replace(/\.[^.]+$/, ""),
      ext,
    };
  }

  return { keyWioutExt: key };
};

export const changeExt = ({
  key,
  ext,
}: {
  key: string;
  ext?: VIDEO_EXTENSIONS;
}) => {
  const list = key.split(".");
  const hasExt = list.length > 1;
  const newExt = ext || list.slice(-1)[0] || "";

  if (hasExt) {
    return key.replace(/\.[^.]+$/, `.${newExt}`);
  }

  return `${key}${ext ? "." + ext : ""}`;
};

export const toProcessedKey = ({
  key,
  subFolder,
  ext,
}: {
  key: string;
  subFolder: number | string;
  ext?: VIDEO_EXTENSIONS;
}) => `${VIDEO_FOLDER_OUT}/${subFolder}/` + changeExt({ key, ext });
