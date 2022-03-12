import {
  Post,
  PostReaction,
  SourceLogo,
  User,
  VideoSource,
} from "@prisma/client"

export type FormattedSourceElementProps = { srcSet: string; type: string }

export type SingleInteractionPostData =
  | Pick<
      Post,
      "id" | "slug" | "title" | "description" | "createdById" | "createdAt"
    > & {
      PostReactions: PostReaction[]
      Source: SourceWithLogos
      CreatedBy: User
      VideoSources: VideoSource[]
      _count: {
        PostReactions: number
      }
    }

export type SourceWithLogos = {
  SourceLogos: SourceLogo[]
  name: string
  url: string
}

export type SourceWithFormattedLogos = {
  formattedLogos: [string, FormattedSourceElementProps][]
  fallBackImage: SourceLogo
  name: string
  url: string
}
export type FormattedSingleInteractionsPostData = {
  reactionCount: number
  reactedByLoggedInUser: boolean
  id: string
  title: string
  slug: string
  createdById: string
  createdAt: Date
  // modifiedAt: Date
  // sourceId: string
  // previewUrl: string
  description: string
  Source: SourceWithFormattedLogos
  CreatedBy: User
  VideoSources: VideoSource[]
}
