import "source-map-support/register";
import MediaConvert from "aws-sdk/clients/mediaconvert";
import { SNSHandler, S3EventRecord } from "aws-lambda";
import Lambda from "aws-sdk/clients/lambda";

import * as path from "path";

export const handler: SNSHandler = async (event) => {
  const mediaConvert = new MediaConvert({
    apiVersion: "2017-08-29"
  });

  console.log({ event, ROLE: process.env.ROLE });
  // Fail on mising data
  if (event.Records === null) {
    throw new Error("Error: Event has no records.");
  }

  const eventRecords = JSON.parse(event.Records[0].Sns.Message)
    .Records as S3EventRecord[];

  const s3Record = eventRecords?.[0]?.s3;

  if (!s3Record) {
    return;
  }

  const { name: title } = path.parse(s3Record.object.key);

  var params = {
    FunctionName: process.env.AWS_LAMBDA_FUNCTION_NAME
  };
  const lambda = new Lambda({ region: process.env.AWS_REGION });

  const fnConfig = await lambda.getFunctionConfiguration(params).promise();
  const Role = fnConfig.Role;
  if (!Role) {
    console.log("can not get function role");
    return;
  }

  try {
    const { Endpoints } = await mediaConvert.describeEndpoints().promise();

    const params = {
      apiVersion: "2017-08-29",
      endpoint: Endpoints?.[0]?.Url
    };
    console.log({ params, s3Record });

    const convert = new MediaConvert(params);

    const hlsResponse = await convert
      .createJob({
        Role: Role,
        JobTemplate: "System-Ott_Hls_Ts_Avc_Aac",
        Settings: {
          Inputs: [
            {
              FileInput: `s3://${s3Record.bucket.name}/${s3Record.object.key}`,
              AudioSelectors: {
                "Audio Selector 1": {
                  Offset: 0
                }
              }
            }
          ],
          OutputGroups: [
            {
              OutputGroupSettings: {
                Type: "HLS_GROUP_SETTINGS",
                HlsGroupSettings: {
                  Destination: `s3://${s3Record.bucket.name}/assets/${title}/hls/`
                }
              }
            }
          ]
        }
      })
      .promise();

    const dashResponse = await convert
      .createJob({
        Role: Role,
        JobTemplate: "System-Ott_Dash_Mp4_Avc_Aac",
        Settings: {
          Inputs: [
            {
              FileInput: `s3://${s3Record.bucket.name}/${s3Record.object.key}`,
              AudioSelectors: {
                "Audio Selector 1": {
                  Offset: 0
                }
              }
            }
          ],
          OutputGroups: [
            {
              OutputGroupSettings: {
                Type: "DASH_ISO_GROUP_SETTINGS",
                DashIsoGroupSettings: {
                  Destination: `s3://${s3Record.bucket.name}/assets/${title}/dash/`
                }
              }
            }
          ]
        }
      })
      .promise();

    console.log({ hlsResponse, dashResponse });
  } catch (e) {
    throw e;
  }
};
