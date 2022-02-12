import { Post, PostReaction, Source, User } from "@prisma/client"
import { StrictExclude } from "~/types/utilities"

type RawInteractionsPostData = Post & {
  Source: Source
  CreatedBy: User
  PostReactions?: PostReaction[]
  _count: {
    PostReactions: number
  }
}

export type FormattedInteractionsPostData = StrictExclude<
  RawInteractionsPostData,
  "PostReactions"
> & {
  reactedByLoggedInUser: boolean
}

function formatInteractionData(
  data: RawInteractionsPostData[],
): FormattedInteractionsPostData[] {
  return data.map(interactionPost => {
    const { PostReactions, ...rest } = interactionPost
    return {
      ...rest,
      reactedByLoggedInUser: PostReactions?.length ? true : false,
    }
  })
}

export { formatInteractionData }
