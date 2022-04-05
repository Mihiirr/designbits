import LikeIcon from "../icons/Like"
import classNames from "../../utils/classnames"
import CommentIcon from "../icons/Comment"
import { Link } from "remix"
import { motion } from "framer-motion"
import { ASSETS_CDN_LINK, CARD_ACTIONS } from "~/utils/constants"
import { formatDistanceToNow } from "date-fns"
import { enUS } from "date-fns/locale"
import { PostActionButton } from "../ActionButton"
import { FormattedInteractionsPostData } from "~/services/db/formatters.server"
import VideoPlayer from "./VideoPlayer"
import Picture from "../common/Picture"

type Props = {
  post: FormattedInteractionsPostData & {
    backgroundColorClass?: string
  }
  index: number
}

const InteractionCard: React.FC<Props> = ({ post, index }) => {
  return (
    <motion.div
      key={post.id}
      initial={{ scale: 0.85, translateY: "-10%" }}
      animate={{ scale: 1, translateY: 0 }}
      transition={{
        delay: 0.1 * index,
        x: { type: "spring", stiffness: 100 },
        default: { duration: 0.5 },
      }}
    >
      <motion.div
        className="relative w-full overflow-hidden rounded-lg bg-gray-200"
        whileHover={{ scale: 1.05 }}
      >
        <Link
          className={classNames(
            post.backgroundColorClass || "bg-gray-800",
            "aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 group relative block h-60 w-full",
          )}
          to={`/interaction/${post.slug}`}
          prefetch="intent"
        >
          <VideoPlayer
            backgroundColorClass={post.backgroundColorClass}
            videoSources={post.VideoSources}
          />
          <div className="absolute top-0 h-16 w-60 bg-gradient-to-br from-gray-800/80 via-transparent p-3 transition-transform group-hover:-translate-y-full group-hover:bg-none">
            <Link
              to="/test"
              className="flex items-center space-x-2 text-xs font-semibold text-gray-200"
            >
              <Picture
                sources={post.Source.formattedLogos}
                imgProps={{
                  src: post.Source.fallBackImage?.url,
                  alt: post.Source.name,
                  className: "h-5 w-5 rounded-md",
                }}
              />
              <span>{post.Source.name}</span>
            </Link>
          </div>
        </Link>
      </motion.div>
      <h3 className="mt-3 text-sm font-semibold text-gray-700">
        <a href={post.slug}>{post.title}</a>
      </h3>
      <div className="mt-1 flex space-x-1 text-xs text-gray-400">
        <a
          href={post.CreatedBy.id}
          className="flex items-center space-x-1 text-indigo-700"
        >
          <img
            className="inline-block h-4 w-4 rounded-full"
            src={ASSETS_CDN_LINK + post.CreatedBy.profilePicture || ""}
            alt="profile"
          />
          <span>{post.CreatedBy.name}</span>
        </a>
        <span>&middot;</span>
        <span>
          {formatDistanceToNow(new Date(post.createdAt), {
            locale: enUS,
            includeSeconds: true,
            addSuffix: true,
          }).replace("hour", "hr")}
        </span>
        <span>&middot;</span>
        <span>{"6k"}</span>
      </div>
      <div className="mt-2 flex space-x-1.5 text-xs text-gray-500">
        <PostActionButton
          btnProps={{
            className:
              "flex items-center py-0.5 px-1 space-x-1 hover:text-indigo-500 focus:text-indigo-500 hover:bg-indigo-50 focus:bg-indigo-50 rounded-sm",
          }}
          formPayload={{
            postId: post.id,
            postSlug: post.slug,
          }}
          actionName={
            post.reactedByLoggedInUser
              ? CARD_ACTIONS.UNDO_LIKE
              : CARD_ACTIONS.LIKE
          }
        >
          <LikeIcon
            height={16}
            width={16}
            variant={post.reactedByLoggedInUser ? "filled" : "outline"}
          />
          {post.reactionsCount > 0 && <span>{post.reactionsCount}</span>}
        </PostActionButton>
        {/* <PostActionButton
          btnProps={{
            className:
              "flex items-center py-0.5 px-1 space-x-1 hover:text-indigo-500 focus:text-indigo-500 hover:bg-indigo-50 focus:bg-indigo-50 rounded-sm",
          }}
          formPayload={{
            postId: post.id,
          }}
          actionName={CARD_ACTIONS.COMMENT}
        > */}
        <div className="flex items-center space-x-1 rounded-sm py-0.5 px-1 hover:bg-indigo-50 hover:text-indigo-500 focus:bg-indigo-50 focus:text-indigo-500">
          <CommentIcon
            variant={post.commentedByLoggedInUser ? "filled" : "outline"}
            height={16}
            width={16}
          />
          {post._count.PostComments > 0 && (
            <span>{post._count.PostComments}</span>
          )}
        </div>
        {/* </PostActionButton> */}
      </div>
    </motion.div>
  )
}

export default InteractionCard
