const functionsBasePath = "src/functions";

const eventConfig = {
  events: [
    {
      sns: {
        arn: "arn:aws:sns:${aws:region}:${aws:accountId}:${env:TOPIC_NAME}-${sls:stage}",
        topicName: "${env:TOPIC_NAME}-${sls:stage}"
      }
    }
  ]
};

const commonConfig = {
  layers: [
    {
      Ref: "FfmpegLambdaLayer"
    }
  ],
  timeout: 200
};

const mp4ToWebMSameSize = {
  ...eventConfig,
  ...commonConfig,
  handler: `${functionsBasePath}/convert/handler.mp4ToWebMSameSize`,
  timeout: 900
};

const generatePreviewSizeMP4 = {
  ...eventConfig,
  ...commonConfig,
  handler: `${functionsBasePath}/convert/handler.generatePreviewSizeMP4`
};

const generatePreviewSizeWebM = {
  ...eventConfig,
  ...commonConfig,
  handler: `${functionsBasePath}/convert/handler.generatePreviewSizeWebM`
};

const transcodeVideo = {
  ...eventConfig,
  handler: `${functionsBasePath}/transcode/index.handler`,
  timeout: 200
  // environment: {
  //   ROLE: {
  //     "Fn::GetAtt": ["LambdaExecutionRole", "Arn"]
  //   }
  // }
  // role: {
  //   "Fn::GetAtt": ["LambdaExecutionRole", "Arn"]
  // }
};

module.exports = {
  mp4ToWebMSameSize,
  generatePreviewSizeMP4,
  generatePreviewSizeWebM,
  transcodeVideo
};
