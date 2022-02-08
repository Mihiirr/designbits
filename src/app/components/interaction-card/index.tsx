import LikeIcon from "../icons/Like"
import classNames from "../../utils/classnames"
import CommentIcon from "../icons/Comment"
import { Link } from "remix"
import type { Post, Source, User } from "@prisma/client"
import { motion } from "framer-motion"
import { ASSETS_CDN_LINK } from "~/utils/constants"

type InteractionData = Post & {
  Source: Source
  CreatedBy: User
} & {
  backgroundColorClass: string
}

export default function InteractionCard({
  interactions,
}: {
  interactions: InteractionData[]
}) {
  return (
    <div className="bg-white">
      <div className="py-8 px-4 sm:py-8 sm:px-6 lg:px-0">
        <h2 className="sr-only">artciles</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {interactions.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ scale: 0.85, translateY: "-10%" }}
              animate={{ scale: 1, translateY: 0 }}
              transition={{
                delay: 0.1 * i,
                x: { type: "spring", stiffness: 100 },
                default: { duration: 0.5 },
              }}
            >
              <motion.div
                className="overflow-hidden relative w-full bg-gray-200 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  className={classNames(
                    article.backgroundColorClass || "bg-gray-800",
                    "aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 h-60 w-full block relative group",
                  )}
                  to={`/interaction/${article.slug}`}
                  prefetch="intent"
                >
                  <video
                    loop
                    muted
                    playsInline
                    className={classNames(
                      article.backgroundColorClass || "bg-gray-800",
                      "w-full h-full opacity-50 group-hover:opacity-100 object-cover object-center",
                    )}
                    onMouseOver={event =>
                      (event.target as HTMLVideoElement).play()
                    }
                    onMouseOut={event =>
                      (event.target as HTMLVideoElement).pause()
                    }
                  >
                    <source
                      src={ASSETS_CDN_LINK + article.previewUrl}
                      type="video/webm"
                    />
                  </video>
                  <div className="absolute top-0 p-3 w-full h-full bg-gradient-to-b group-hover:bg-none from-gray-800 via-transparent transition-transform group-hover:-translate-y-full">
                    <Link
                      to="/test"
                      className="flex items-center space-x-2 text-xs font-semibold text-gray-200"
                    >
                      <img
                        src={article.Source.imageSrc}
                        alt={article.Source.name}
                        className="w-5 h-5 rounded-full"
                      />
                      <span>{article.Source.name}</span>
                    </Link>
                  </div>
                </Link>
              </motion.div>
              <h3 className="mt-3 text-sm font-semibold text-gray-700">
                <a href={article.slug}>{article.title}</a>
              </h3>
              <div className="flex mt-1 space-x-1 text-xs text-gray-400">
                <a
                  href={article.CreatedBy.id}
                  className="flex items-center space-x-1 text-indigo-700"
                >
                  <img
                    className="inline-block w-4 h-4 rounded-full"
                    src={
                      ASSETS_CDN_LINK + article.CreatedBy.profilePicture || ""
                    }
                    alt="profile"
                  />
                  <span>{article.CreatedBy.name}</span>
                </a>
                <span>&middot;</span>
                <span>6 hrs ago</span>
                <span>&middot;</span>
                <span>{"6k"}</span>
              </div>
              <div className="flex mt-2 space-x-4 text-xs text-gray-500">
                <button className="flex items-center py-0.5 px-1 space-x-1 hover:text-indigo-500 focus:text-indigo-500 hover:bg-indigo-50 focus:bg-indigo-50 rounded-sm">
                  <LikeIcon height={16} width={16} />
                  <span>{"17"}</span>
                </button>
                <button className="flex items-center py-0.5 px-1 space-x-1 hover:text-indigo-500 focus:text-indigo-500 hover:bg-indigo-50 focus:bg-indigo-50 rounded-sm">
                  <CommentIcon height={16} width={16} />
                  <span>{"5"}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
