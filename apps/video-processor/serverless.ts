import type { AWS } from "@serverless/typescript";

import {
  generatePreviewSizeWebM,
  generatePreviewSizeMP4,
  mp4ToWebMSameSize,
} from "@functions/hello";

import {
  AssetsBucket,
  // AssetsBucketPolicy,
  UploadAssetSNSTopic,
  UploadAssetSNSTopicPolicy,
} from "./resources";

const serverlessConfiguration: AWS = {
  useDotenv: true,
  service: "assets-processor",
  frameworkVersion: "2",
  plugins: ["serverless-esbuild"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
    lambdaHashingVersion: "20201221",
    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: ["s3:*"],
        Resource: ["*"],
      },
    ],
  },
  // import the function via paths
  functions: {
    generatePreviewSizeWebM,
    generatePreviewSizeMP4,
    mp4ToWebMSameSize,
  },
  package: { individually: true },
  layers: {
    ffmpeg: {
      path: "./layer/ffmpeg",
    },
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },
  variablesResolutionMode: "20210326",
  resources: {
    Resources: {
      UploadAssetSNSTopicPolicy,
      UploadAssetSNSTopic,
      AssetsBucket,
      // AssetsBucketPolicy,
    },
  },
};

module.exports = serverlessConfiguration;
