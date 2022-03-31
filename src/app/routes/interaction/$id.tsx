import {
  CollectionIcon,
  DotsVerticalIcon,
  ShareIcon,
} from "@heroicons/react/outline"
import { UserRole } from "@prisma/client"
import {
  LoaderFunction,
  MetaFunction,
  useLoaderData,
  ActionFunction,
  redirect,
} from "remix"
import { handlePostRelatedActions } from "~/action-handlers/card-action-handlers.server"
import Avatar from "~/components/Avatar"
import Button from "~/components/Button"
import CommentsSection from "~/components/Comments/CommentsSection"
import AndroidIcon from "~/components/icons/Android"
import LikeIcon from "~/components/icons/Like"
import InteractionFeedback from "~/components/InteractionFeedback"
import Layout from "~/components/Layout"
import { PostContextProvider } from "~/context/postContext"
import { ASSETS_CDN_LINK, CARD_ACTIONS, ERROR_CODES } from "~/utils/constants"
import { formatSingleInteractionPostData } from "~/services/db/formatters.server"
import { getLoggedInUser } from "~/services/auth/session.server"
import { apiHandler } from "~/utils/api-handler"
import { NotFoundException } from "~/utils/response-helpers.server"
import { findPostPageData } from "~/services/db/queries/post.server"
import { PostActionButton } from "~/components/ActionButton"
import Picture from "~/components/common/Picture"
import { FormattedSingleInteractionsPostData } from "~/types/formatters"
import clsx from "clsx"

import escapeHtml from "escape-html"
import { Text } from "slate"
import { CustomElement, CustomText } from "~/types/editor"
import Platform from "~/components/Post/Platform"

export let loader: LoaderFunction = async ({ params, request }) => {
  const postSlug = params.id

  if (!postSlug) {
    return redirect("/explore/all", {
      status: 307,
    })
  }

  const user = await getLoggedInUser(request)

  const data = await findPostPageData({
    postSlug,
    userId: user?.id,
  })

  if (data === null) {
    return NotFoundException({
      data,
      errors: {
        type: ERROR_CODES.POST_NOT_FOUND,
      },
    })
  } else {
    return formatSingleInteractionPostData(data)
  }
}

export const action: ActionFunction = apiHandler({
  POST: {
    handler: handlePostRelatedActions,
    protect: true,
    allowedRoles: [UserRole.USER],
  },
})

const serializeNode = (node: CustomElement | CustomText): JSX.Element => {
  if (Text.isText(node)) {
    let res: JSX.Element = <>{node.text}</>
    if (node.bold) {
      res = <strong>{res}</strong>
    }
    return res
  }

  const children = node.children?.map(n => serializeNode(n))

  switch (node.type) {
    case "block-quote":
      return (
        <blockquote>
          <p>{children}</p>
        </blockquote>
      )
    case "paragraph":
      return <p>{children}</p>
    case "link":
      return <a href={escapeHtml(node.url)}>{children}</a>
    case "mention":
      return (
        <span>
          <a
            href={`/profile/${node.character}`}
            className="rounded-sm py-0.5 text-indigo-500"
          >
            @{node.character}
          </a>{" "}
        </span>
      )
    default:
      return <p>{children}</p>
  }
}

const getHTML = (nodes: (CustomElement | CustomText)[]) => {
  console.log(nodes)
  return <>{nodes?.map(n => serializeNode(n))}</>
}

type PostData = FormattedSingleInteractionsPostData

const Interaction = () => {
  const postData = useLoaderData<PostData>()

  return (
    <Layout>
      <PostContextProvider initState={postData}>
        <div className="grid w-full grid-cols-8 xl:grid-cols-7">
          <div className="col-span-5 space-y-7 px-8 xl:col-span-5">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  {postData.title}
                </div>
                <div className="mt-1 flex space-x-1 text-sm text-gray-500">
                  <span>6 hrs ago</span>
                  <span>&middot;</span>
                  <span>1.2k views</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <PostActionButton
                  btnProps={{
                    className:
                      "flex py-2 px-4 space-x-2 text-gray-800 rounded-lg border border-gray-200",
                  }}
                  formPayload={{
                    postId: postData.id,
                  }}
                  actionName={
                    postData?.reactedByLoggedInUser
                      ? CARD_ACTIONS.UNDO_LIKE
                      : CARD_ACTIONS.LIKE
                  }
                >
                  <LikeIcon
                    height="24"
                    width="24"
                    variant={
                      postData?.reactedByLoggedInUser ? "filled" : "outline"
                    }
                  />
                  {postData?.reactionCount !== 0 && (
                    <span>{postData?.reactionCount}</span>
                  )}
                </PostActionButton>
                <button className="flex space-x-2 rounded-lg border border-gray-200 p-2 text-gray-800">
                  <CollectionIcon height="24" width="24" />
                </button>
                <button className="flex space-x-2 rounded-lg border border-gray-200 p-2 text-gray-800">
                  <ShareIcon height="24" width="24" />
                </button>
              </div>
            </div>
            <div>
              <video
                className="aspect-video w-full rounded-lg bg-gray-800"
                controls
                autoPlay
              >
                {postData.VideoSources.map(source => (
                  <source
                    key={source.id}
                    src={ASSETS_CDN_LINK + source.url}
                    type={source.type}
                  ></source>
                ))}
              </video>
            </div>
          </div>
          <div className="col-span-3 xl:col-span-2">
            <div className="w-full space-y-7 px-8">
              <div className="flex items-center justify-between">
                <Avatar
                  slug={postData.CreatedBy.profileSlug}
                  imgSrc={ASSETS_CDN_LINK! + postData.CreatedBy.profilePicture}
                  name={postData.CreatedBy.name}
                  showFollowers
                />
                <div className="flex items-center space-x-4">
                  <Button>Follow</Button>
                  <button>
                    <DotsVerticalIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-800">{postData.description}</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex w-full space-x-4">
                  <div className="w-2/12">Source</div>
                  <div>
                    <a
                      href={postData.Source.url}
                      className="flex items-center space-x-2 text-sm font-semibold text-gray-800"
                    >
                      <Picture
                        sources={postData.Source.formattedLogos}
                        imgProps={{
                          src: postData.Source.fallBackImage?.url,
                          alt: postData.Source.name,
                          className: "h-5 w-5 rounded-md bg-gray-800/10",
                        }}
                      />
                      <span>{postData.Source.name}</span>
                    </a>
                  </div>
                </div>
                <div className="flex w-full space-x-4">
                  <div className="w-2/12">Platform</div>
                  <Platform platform={postData.platform} />
                </div>
              </div>
              <div className="flex space-x-2 text-sm">
                {postData.tags.map(tag => (
                  <div
                    className={clsx("rounded py-1 px-2", tag.classname)}
                    key={tag.id}
                  >
                    {tag.name}
                  </div>
                ))}
                {/* <div className="rounded    py-1 px-2 text-indigo-700">
                  Navigation
                </div>
                <div className="rounded bg-indigo-50 py-1 px-2 text-indigo-700">
                  Useful
                </div>
                <div className="rounded bg-indigo-50 py-1 px-2 text-indigo-700">
                  Accessibility
                </div> */}
              </div>
            </div>
            <div className="mx-8 mt-12 border-b border-gray-300">
              <CommentsSection />
              <div className="my-4 space-y-5">
                {postData.PostComments.map(comment => (
                  <div key={comment.id}>
                    <div className="mb-1.5 flex items-center space-x-3">
                      <img
                        className="inline-block h-6 w-6 rounded-full"
                        src={comment.CreatedBy.profilePicture || ""}
                        alt="profile"
                      />
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-gray-900">
                        {comment.CreatedBy.name}
                      </p>
                    </div>
                    <div className="ml-9 text-sm text-gray-600">
                      {getHTML(
                        JSON.parse(comment.comment as string) as unknown as (
                          | CustomElement
                          | CustomText
                        )[],
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <InteractionFeedback />
          </div>
        </div>
      </PostContextProvider>
    </Layout>
  )
}

export const meta: MetaFunction = ({ data }) => {
  const postData = data as PostData
  return {
    title: postData.title + " | DesignBits",
    description: postData.description,
  }
}
export default Interaction
