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
} from "remix"
import { handlePostRelatedActions } from "~/action-handlers/card-action-handlers.server"
import Avatar from "~/components/Avatar"
import Button from "~/components/Button"
import AndroidIcon from "~/components/icons/Android"
import LikeIcon from "~/components/icons/Like"
import InteractionFeedback from "~/components/InteractionFeedback"
import PostButton from "~/components/Post/PostButton"
import Layout from "~/components/Layout"
import { db } from "~/services/db/client.server"
import { ASSETS_CDN_LINK, ERROR_CODES } from "~/utils/constants"
import {
  formatSingleInteractionPostData,
  FormattedSingleInteractionsPostData,
} from "~/services/db/formatters.server"
import { getLoggedInUser } from "~/services/auth/session.server"
import { apiHandler } from "~/utils/api-handler"
import { NotFoundException } from "~/utils/response-helpers.server"

export let loader: LoaderFunction = async ({ params, request }) => {
  const postSlug = params.id
  const user = await getLoggedInUser(request)

  const data = await db.post.findUnique({
    where: {
      slug: postSlug,
    },
    include: {
      Source: true,
      CreatedBy: true,
      VideoSources: true,
      PostReactions: user?.id
        ? {
            select: {
              reaction: true,
            },
            where: {
              reactedBy: user.id,
            },
          }
        : false,
      _count: {
        select: {
          PostReactions: true,
        },
      },
    },
  })

  if (data === null) {
    return NotFoundException({
      error: {
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

type PostData = FormattedSingleInteractionsPostData

export enum CARD_ACTIONS {
  LIKE = "like",
  UNDO_LIKE = "undo_like",
  COMMENT = "comment",
}

const Interaction = () => {
  const postData = useLoaderData<PostData>()
  console.log({ postData })
  return (
    <Layout>
      <div className="grid grid-cols-7 w-full">
        <div className="col-span-5 px-8 space-y-7">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-2xl font-bold text-gray-800">
                {postData.title}
              </div>
              <div className="flex mt-1 space-x-1 text-sm text-gray-500">
                <span>6 hrs ago</span>
                <span>&middot;</span>
                <span>1.2k views</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <PostButton
                btnProps={{
                  className:
                    "flex py-2 px-4 space-x-2 text-gray-800 rounded-lg border border-gray-200",
                }}
                postId={postData.id}
                value={
                  postData?.PostReactions?.length > 0
                    ? CARD_ACTIONS.UNDO_LIKE
                    : CARD_ACTIONS.LIKE
                }
              >
                <LikeIcon
                  height="24"
                  width="24"
                  variant={
                    postData?.PostReactions?.length > 0 ? "filled" : "outline"
                  }
                />
                {postData?.reactionCount !== 0 && (
                  <span>{postData?.reactionCount}</span>
                )}
              </PostButton>
              <button className="flex p-2 space-x-2 text-gray-800 rounded-lg border border-gray-200">
                <CollectionIcon height="24" width="24" />
              </button>
              <button className="flex p-2 space-x-2 text-gray-800 rounded-lg border border-gray-200">
                <ShareIcon height="24" width="24" />
              </button>
            </div>
          </div>
          <div>
            <video
              className="aspect-video w-full bg-gray-800 rounded-lg"
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
        <div className="col-span-2 ">
          <div className="px-8 space-y-7 w-full">
            <div className="flex justify-between items-center">
              <Avatar
                slug={postData.CreatedBy.profileSlug}
                imgSrc={ASSETS_CDN_LINK! + postData.CreatedBy.profilePicture}
                name={postData.CreatedBy.name}
              />
              <div className="flex items-center space-x-4">
                <Button>Follow</Button>
                <button>
                  <DotsVerticalIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-800">{postData.description}</p>
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex space-x-4 w-full">
                <div className="w-2/12">Source</div>
                <div>
                  <a
                    href={postData.Source.url}
                    className="flex items-center space-x-2 text-sm font-semibold text-gray-800"
                  >
                    <img
                      src={postData.Source.imageSrc}
                      alt={postData.Source.name}
                      className="w-5 h-5 bg-gray-800 rounded-full"
                    />
                    <span>{postData.Source.name}</span>
                  </a>
                </div>
              </div>
              <div className="flex space-x-4 w-full">
                <div className="w-2/12">Platform</div>
                <div className="flex space-x-2 text-gray-800">
                  <AndroidIcon />
                  <span>Android</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 text-sm">
              <div className="py-1 px-2 text-indigo-700 bg-indigo-50 rounded">
                Navigation
              </div>
              <div className="py-1 px-2 text-indigo-700 bg-indigo-50 rounded">
                Useful
              </div>
              <div className="py-1 px-2 text-indigo-700 bg-indigo-50 rounded">
                Accessibility
              </div>
            </div>
          </div>
          <div className="mx-8 mt-12 border-b border-gray-300"></div>

          <InteractionFeedback />
        </div>
      </div>
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
