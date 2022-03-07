import {
  CollectionIcon,
  DotsVerticalIcon,
  ShareIcon,
} from "@heroicons/react/outline"
import { Post, Source, User, UserRole, VideoSource } from "@prisma/client"
import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
} from "remix"
import { handleCommentActions } from "~/action-handlers/comment-actions.server"
import Avatar from "~/components/Avatar"
import Button from "~/components/Button"
import CommentsSection from "~/components/Comments/CommentsSection"
import AndroidIcon from "~/components/icons/Android"
import LikeIcon from "~/components/icons/Like"
import InteractionFeedback from "~/components/InteractionFeedback"
import Layout from "~/components/Layout"
import { PostContextProvider } from "~/context/post-context"
import { db } from "~/services/db/client.server"
import { apiHandler } from "~/utils/api-handler"
import { ASSETS_CDN_LINK } from "~/utils/constants"
const sourcePriority = ["video/webm", "video/mp4"]

export let loader: LoaderFunction = async ({ params }) => {
  const postId = params.id

  const data = await db.post.findUnique({
    where: {
      slug: postId,
    },
    include: {
      Source: true,
      CreatedBy: true,
      VideoSources: true,
      PostComments: {
        include: {
          CommentReactions: true,
          CreatedBy: true,
          Mentions: true,
          _count: {
            select: {
              ReplyComments: true,
            },
          },
        },
      },
    },
  })
  const videoSourcesSorted = data?.VideoSources.sort(function (a, b) {
    return sourcePriority.indexOf(a.type) - sourcePriority.indexOf(b.type)
  })
  return {
    ...data,
    VideoSources: videoSourcesSorted,
  }
}

export const action: ActionFunction = apiHandler({
  POST: {
    handler: handleCommentActions,
    protect: true,
    allowedRoles: [UserRole.USER],
  },
})

type PostData = Post & {
  Source: Source
  CreatedBy: User
  VideoSources: VideoSource[]
  PostComments: Comment[]
}

const Interaction = () => {
  const postData = useLoaderData<PostData>()
  console.log({ postData })

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
                <button className="flex space-x-2 rounded-lg border border-gray-200 py-2 px-4 text-gray-800">
                  <LikeIcon height="24" width="24" />
                  <span>{256}</span>
                </button>
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
                      <img
                        src={postData.Source.imageSrc}
                        alt={postData.Source.name}
                        className="h-5 w-5 rounded-full bg-gray-800"
                      />
                      <span>{postData.Source.name}</span>
                    </a>
                  </div>
                </div>
                <div className="flex w-full space-x-4">
                  <div className="w-2/12">Platform</div>
                  <div className="flex space-x-2 text-gray-800">
                    <AndroidIcon />
                    <span>Android</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 text-sm">
                <div className="rounded bg-indigo-50 py-1 px-2 text-indigo-700">
                  Navigation
                </div>
                <div className="rounded bg-indigo-50 py-1 px-2 text-indigo-700">
                  Useful
                </div>
                <div className="rounded bg-indigo-50 py-1 px-2 text-indigo-700">
                  Accessibility
                </div>
              </div>
            </div>
            <div className="mx-8 mt-12 border-b border-gray-300">
              <CommentsSection />
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
