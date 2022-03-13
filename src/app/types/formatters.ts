import { SourceLogo } from "@prisma/client"
import { AsyncReturnType } from "type-fest"
import { formatSingleInteractionPostData } from "~/services/db/formatters.server"
import { findPostPageData } from "~/services/db/queries/post.server"

export type FormattedSourceElementProps = { srcSet: string; type: string }

export type SingleInteractionPostData = AsyncReturnType<typeof findPostPageData>

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
export type FormattedSingleInteractionsPostData = ReturnType<
  typeof formatSingleInteractionPostData
>
