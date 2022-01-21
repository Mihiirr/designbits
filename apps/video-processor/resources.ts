import type { AWS } from "@serverless/typescript";

export const AssetsBucket: AWS["resources"]["Resources"]["value"] = {
  Type: "AWS::S3::Bucket",
  DependsOn: ["UploadAssetSNSTopicPolicy"],
  Properties: {
    BucketName: "${env:ASSETS_BUCKET}-${sls:stage}",
    PublicAccessBlockConfiguration: {
      BlockPublicAcls: false,
      BlockPublicPolicy: false,
      IgnorePublicAcls: false,
      RestrictPublicBuckets: false,
    },
    AccelerateConfiguration: {
      AccelerationStatus: "Enabled",
    },
    NotificationConfiguration: {
      TopicConfigurations: [
        {
          Event: "s3:ObjectCreated:*",
          Topic: {
            Ref: "UploadAssetSNSTopic",
          },
        },
      ],
    },
    CorsConfiguration: {
      CorsRules: [
        {
          AllowedMethods: ["GET", "PUT", "POST", "HEAD"],
          AllowedOrigins: ["*"],
          AllowedHeaders: ["*"],
          MaxAge: "3000",
        },
      ],
    },
  },
};

// export const AssetsBucketPolicy: AWS["resources"]["Resources"]["value"] = {
//   Type: "AWS::S3::BucketPolicy",
//   Properties: {
//     PolicyDocument: {
//       Id: "MyPolicy",
//       Version: "2012-10-17",
//       Statement: [
//         {
//           Sid: "PublicReadForGetBucketObjects",
//           Effect: "Allow",
//           Principal: "*",
//           Action: "s3:GetObject",
//           Resource: "arn:aws:s3:::${env:ASSETS_BUCKET}-${sls:stage}/*",
//         },
//       ],
//     },
//     Bucket: {
//       Ref: "AssetsBucket",
//     },
//   },
// };

export const UploadAssetSNSTopic: AWS["resources"]["Resources"]["value"] = {
  Type: "AWS::SNS::Topic",
  Properties: {
    DisplayName: "Assets bucket topic",
    TopicName: "${env:TOPIC_NAME}-${sls:stage}",
  },
};

export const UploadAssetSNSTopicPolicy: AWS["resources"]["Resources"]["value"] =
  {
    Type: "AWS::SNS::TopicPolicy",
    Properties: {
      PolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: "*",
            Action: "sns:Publish",
            Resource: { Ref: "UploadAssetSNSTopic" },
            Condition: {
              ArnLike: {
                "AWS:SourceArn":
                  "arn:aws:s3:::${env:ASSETS_BUCKET}-${sls:stage}",
              },
            },
          },
        ],
      },
      Topics: [
        {
          Ref: "UploadAssetSNSTopic",
        },
      ],
    },
  };
