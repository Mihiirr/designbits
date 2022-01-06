import LikeIcon from "../icons/Like"
import classNames from "../../utils/classnames"
import CommentIcon from "../icons/Comment"
import { Link } from "remix"

const articles = [
  {
    id: 1,
    title: "Bottom navigation drag utility",
    href: "/interaction/1",
    source: {
      logo: "https://basecamp.com/basecamp-icon-196x196.png",
      name: "Basecamp",
    },
    author: {
      name: "Leslie",
      profile: "/leslie",
    },
    likes: 106,
    comments: {
      count: 6,
    },
    views: "1.2k",
    backgroundColorClass: "bg-yellow-50",
  },
  {
    id: 2,
    title: "Collapse side navigation on-hover",
    href: "/interaction/2",
    source: {
      logo: "//logo.clearbit.com/loom.com",
      name: "Loom",
    },
    author: {
      name: "Leslie",
      profile: "/leslie",
    },
    likes: 106,
    comments: {
      count: 6,
    },
    views: "1.2k",
    backgroundColorClass: "bg-indigo-50",
  },
  {
    id: 3,
    title: "Icon transition micro animation",
    href: "/interaction/3",
    source: {
      logo: "//logo.clearbit.com/telegram.org",
      name: "Telegram",
    },
    author: {
      name: "Wade Warren",
      profile: "/wade-warren",
    },
    likes: 106,
    comments: {
      count: 6,
    },
    views: "1.2k",
    backgroundColorClass: "bg-gray-200",
  },
  {
    id: 4,
    title: "Swipe down to refresh animation",
    href: "/interaction/4",
    source: {
      logo: "//logo.clearbit.com/dribbble.com/",
      name: "Dribbble",
    },
    author: {
      name: "Leslie",
      profile: "/leslie",
    },
    likes: 106,
    comments: {
      count: 6,
    },
    views: "1.2k",
    backgroundColorClass: "bg-orange-50",
  },
  // More products...
]

export default function InteractionCard() {
  return (
    <div className="bg-white">
      <div className="py-8 px-4 sm:py-8 sm:px-6 lg:px-0">
        <h2 className="sr-only">artciles</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {articles.map(article => (
            <div key={article.id}>
              <div className="overflow-hidden relative w-full bg-gray-200 rounded-lg">
                {/* <img
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  className="w-full h-full hover:opacity-75 object-cover object-center"
                /> */}
                <a
                  className={classNames(
                    article.backgroundColorClass,
                    "aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 h-60 w-full hover:opacity-75 block",
                  )}
                  href={article.href}
                >
                  <div className="p-3">
                    <Link
                      to="/test"
                      className="flex items-center space-x-1 text-xs font-semibold text-gray-800"
                    >
                      <img
                        src={article.source.logo}
                        alt={article.source.name}
                        className="w-5 h-5 rounded-full"
                      />
                      <span>{article.source.name}</span>
                    </Link>
                  </div>
                </a>
              </div>
              <h3 className="mt-3 text-sm font-semibold text-gray-700">
                <a href={article.href}>{article.title}</a>
              </h3>
              <div className="flex mt-1 space-x-1 text-xs text-gray-400">
                <a href={article.author.profile} className="text-indigo-700">
                  {article.author.name}
                </a>
                <span>&middot;</span>
                <span>6 hrs ago</span>
                <span>&middot;</span>
                <span>{article.views}</span>
              </div>
              <div className="flex mt-2 space-x-4 text-xs text-gray-500">
                <button className="flex items-center py-0.5 px-1 space-x-1 hover:text-indigo-500 focus:text-indigo-500 hover:bg-indigo-50 focus:bg-indigo-50 rounded-sm">
                  <LikeIcon height={16} width={16} />
                  <span>{article.likes}</span>
                </button>
                <button className="flex items-center py-0.5 px-1 space-x-1 hover:text-indigo-500 focus:text-indigo-500 hover:bg-indigo-50 focus:bg-indigo-50 rounded-sm">
                  <CommentIcon height={16} width={16} />
                  <span>{article.comments.count}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
