import {
  CollectionIcon,
  DotsVerticalIcon,
  ShareIcon,
} from "@heroicons/react/outline"
import { Post, Source, User, VideoSource } from "@prisma/client"
import React from "react"
import { LoaderFunction, MetaFunction, useLoaderData } from "remix"
import Avatar from "~/components/Avatar"
import Button from "~/components/Button"
import AndroidIcon from "~/components/icons/Android"
import LikeIcon from "~/components/icons/Like"
import InteractionFeedback from "~/components/InteractionFeedback"
import Layout from "~/components/Layout"
import { db } from "~/services/db/prisma.server"

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

type PostData = Post & {
  Source: Source
  CreatedBy: User
  VideoSources: VideoSource[]
}

const ASSETS_CDN_LINK = "https://d33dtx48sf6a61.cloudfront.net/"

const Interaction = () => {
  const postData = useLoaderData<PostData>()

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
              <button className="flex py-2 px-4 space-x-2 text-gray-800 rounded-lg border border-gray-200">
                <LikeIcon height="24" width="24" />
                <span>{256}</span>
              </button>
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
                imgSrc={postData.CreatedBy.profilePicture}
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
