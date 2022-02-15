import LikeIcon from "../icons/Like"
import classNames from "../../utils/classnames"
import CommentIcon from "../icons/Comment"
import { Link } from "remix"
import { motion } from "framer-motion"
import { ASSETS_CDN_LINK } from "~/utils/constants"
import { formatDistanceToNow } from "date-fns"
import { enUS } from "date-fns/locale"
import PostButton from "./PostButton"
import { FormattedInteractionsPostData } from "~/services/db/formatters.server"
import VideoPlayer from "./VideoPlayer"

type Props = {
  post: FormattedInteractionsPostData & {
    backgroundColorClass?: string
  }
  index: number
}

export enum CARD_ACTIONS {
  LIKE = "like",
  UNDO_LIKE = "undo_like",
  COMMENT = "comment",
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
        className="overflow-hidden relative w-full bg-gray-200 rounded-lg"
        whileHover={{ scale: 1.05 }}
      >
        <Link
          className={classNames(
            post.backgroundColorClass || "bg-gray-800",
            "aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 h-60 w-full block relative group",
          )}
          to={`/interaction/${post.slug}`}
          prefetch="intent"
        >
          <VideoPlayer
            src={ASSETS_CDN_LINK + post.previewUrl}
            backgroundColorClass={post.backgroundColorClass}
          />
          <div className="absolute top-0 p-3 w-full h-full bg-gradient-to-b group-hover:bg-none from-gray-800 via-transparent transition-transform group-hover:-translate-y-full">
            <Link
              to="/test"
              className="flex items-center space-x-2 text-xs font-semibold text-gray-200"
            >
              <img
                src={post.Source.imageSrc}
                alt={post.Source.name}
                className="w-5 h-5 rounded-full"
              />
              <span>{post.Source.name}</span>
            </Link>
          </div>
        </Link>
      </motion.div>
      <h3 className="mt-3 text-sm font-semibold text-gray-700">
        <a href={post.slug}>{post.title}</a>
      </h3>
      <div className="flex mt-1 space-x-1 text-xs text-gray-400">
        <a
          href={post.CreatedBy.id}
          className="flex items-center space-x-1 text-indigo-700"
        >
          <img
            className="inline-block w-4 h-4 rounded-full"
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
          })}
        </span>
        <span>&middot;</span>
        <span>{"6k"}</span>
      </div>
      <div className="flex mt-2 space-x-4 text-xs text-gray-500">
        <PostButton
          postId={post.id}
          value={
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
          <span>{post.reactionsCount}</span>
        </PostButton>
        <PostButton postId={post.id} value={CARD_ACTIONS.COMMENT}>
          <CommentIcon height={16} width={16} />
          <span>{"5"}</span>
        </PostButton>
      </div>
    </motion.div>
  )
}

export default InteractionCard
