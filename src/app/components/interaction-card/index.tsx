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
      <div className="px-4 py-8 sm:px-6 sm:py-8 lg:px-0">
        <h2 className="sr-only">artciles</h2>
        <div className="grid gap-x-6 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 xl:grid-cols-4">
          {articles.map(article => (
            <div key={article.id}>
              <div className="w-full bg-gray-200 rounded-lg overflow-hidden relative">
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
                      className="flex space-x-1 items-center text-gray-800 font-semibold text-xs"
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
              <h3 className="mt-3 text-gray-700 text-sm font-semibold">
                <a href={article.href}>{article.title}</a>
              </h3>
              <div className="flex text-xs mt-1 space-x-1 text-gray-400">
                <a href={article.author.profile} className="text-indigo-700">
                  {article.author.name}
                </a>
                <span>&middot;</span>
                <span>6 hrs ago</span>
                <span>&middot;</span>
                <span>{article.views}</span>
              </div>
              <div className="flex mt-2 text-gray-500 text-xs space-x-4">
                <button className="space-x-1 flex items-center hover:text-indigo-500 hover:bg-indigo-50 focus:text-indigo-500 focus:bg-indigo-50 px-1 rounded-sm py-0.5">
                  <LikeIcon height={16} width={16} />
                  <span>{article.likes}</span>
                </button>
                <button className="space-x-1 flex items-center hover:text-indigo-500 hover:bg-indigo-50 focus:text-indigo-500 focus:bg-indigo-50 px-1 rounded-sm py-0.5">
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
