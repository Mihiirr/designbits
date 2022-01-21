import { handlerPath } from "@libs/handlerResolver";
import type { AWS } from "@serverless/typescript";
import { ValueOf } from "type-fest";

type FnHandlerConfig = ValueOf<AWS["functions"], "k">;

const commonConfig: Omit<FnHandlerConfig, "handler"> = {
  events: [
    {
      // s3: {
      //   event: "s3:ObjectCreated:*",
      //   bucket: "designbits-assets-sls",
      //   rules: [
      //     {
      //       suffix: "mp4",
      //     },
      //     {
      //       prefix: "/dev/",
      //     },
      //   ],
      // },
      sns: {
        arn: "arn:aws:sns:${aws:region}:${aws:accountId}:${env:TOPIC_NAME}-${sls:stage}",
        topicName: "${env:TOPIC_NAME}-${sls:stage}",
      },
    },
  ],
  layers: [
    {
      Ref: "FfmpegLambdaLayer",
    },
  ],
  timeout: 200,
};

export const mp4ToWebMSameSize: FnHandlerConfig = {
  ...commonConfig,
  handler: `${handlerPath(__dirname)}/handler.mp4ToWebMSameSize`,
  timeout: 900,
};

export const generatePreviewSizeMP4: FnHandlerConfig = {
  ...commonConfig,
  handler: `${handlerPath(__dirname)}/handler.generatePreviewSizeMP4`,
};

export const generatePreviewSizeWebM: FnHandlerConfig = {
  ...commonConfig,
  handler: `${handlerPath(__dirname)}/handler.generatePreviewSizeWebM`,
};
