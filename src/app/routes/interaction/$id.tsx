import {
  CollectionIcon,
  DotsVerticalIcon,
  ShareIcon,
} from "@heroicons/react/outline"
import React from "react"
import Avatar from "~/components/Avatar"
import Button from "~/components/Button"
import AndroidIcon from "~/components/icons/Android"
import LikeIcon from "~/components/icons/Like"
import InteractionFeedback from "~/components/InteractionFeedback"
import Layout from "~/components/Layout"

interface Props {}

const Interaction = (props: Props) => {
  return (
    <Layout>
      <div className="grid grid-cols-7 w-full">
        <div className="col-span-5 px-8 space-y-7">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-bold text-2xl text-gray-800">
                Bottom navigation drag utility
              </div>
              <div className="flex text-sm mt-1 space-x-1 text-gray-500">
                <span>6 hrs ago</span>
                <span>&middot;</span>
                <span>1.2k views</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="flex border px-4 py-2 rounded-lg border-gray-200 text-gray-800 space-x-2">
                <LikeIcon height="24" width="24" />
                <span>256</span>
              </button>
              <button className="flex border p-2 rounded-lg border-gray-200 text-gray-800 space-x-2">
                <CollectionIcon height="24" width="24" />
              </button>
              <button className="flex border p-2 rounded-lg border-gray-200 text-gray-800 space-x-2">
                <ShareIcon height="24" width="24" />
              </button>
            </div>
          </div>
          <div className="aspect-video w-full bg-yellow-50 rounded-lg"></div>
        </div>
        <div className="col-span-2 ">
          <div className="w-full px-8 space-y-7">
            <div className="flex justify-between items-center">
              <Avatar />
              <div className="flex space-x-4 items-center">
                <Button>Follow</Button>
                <button>
                  <DotsVerticalIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-800">
              An innovative way to utilize the bottom navigation menu in mobile
              app for quick actions. It doesn’t disturb the UI and makes it easy
              to create new task or send message, no matter where I am in the
              app. Big time saviour.
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <div className="space-x-4 w-full flex">
                <div className="w-2/12">Source</div>
                <div>
                  <a
                    href="/"
                    className="flex space-x-1 items-center text-gray-800 font-semibold text-xs"
                  >
                    <img
                      src="https://basecamp.com/basecamp-icon-196x196.png"
                      alt="Basecamp.com"
                      className="w-5 h-5 rounded-full"
                    />
                    <span>Basecamp.com</span>
                  </a>
                </div>
              </div>
              <div className="space-x-4 w-full flex">
                <div className="w-2/12">Platform</div>
                <div className="flex text-gray-800 space-x-1">
                  <AndroidIcon />
                  <span>Android</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 text-sm">
              <div className="px-2 py-1 text-indigo-700 bg-indigo-50 rounded">
                Navigation
              </div>
              <div className="px-2 py-1 text-indigo-700 bg-indigo-50 rounded">
                Useful
              </div>
              <div className="px-2 py-1 text-indigo-700 bg-indigo-50 rounded">
                Accessibility
              </div>
            </div>
          </div>
          <div className="border-b border-gray-300 mt-12 mx-8"></div>

          <InteractionFeedback />
        </div>
      </div>
    </Layout>
  )
}

export default Interaction
