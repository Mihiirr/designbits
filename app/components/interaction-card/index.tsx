import LikeIcon from "~/components/icons/Like"
import classNames from "~/utils/classnames"
import CommentIcon from "../icons/Comment"

const articles = [
  {
    id: 1,
    title: "Bottom navigation drag utility",
    href: "/1",
    price: "$48",
    source: {
      logo: "//logo.clearbit.com/knowuser.com",
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
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    title: "Nomad Tumbler",
    href: "/2",
    price: "$35",
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
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    title: "Focus Paper Refill",
    href: "/3",
    price: "$89",
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
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    title: "Machined Mechanical Pencil",
    href: "4",
    price: "$35",
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
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
]

export default function InteractionCard() {
  return (
    <div className="bg-white">
      <div className="px-4 py-8 sm:px-6 sm:py-8 lg:px-0">
        <h2 className="sr-only">Products</h2>

        <div className="grid gap-x-6 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 xl:grid-cols-4">
          {articles.map(article => (
            <a key={article.id} href={article.href}>
              <div className="w-full bg-gray-200 rounded-lg overflow-hidden relative">
                {/* <img
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  className="w-full h-full hover:opacity-75 object-cover object-center"
                /> */}
                <div
                  className={classNames(
                    article.backgroundColorClass,
                    "aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 h-60 w-full hover:opacity-75",
                  )}
                >
                  <div className="p-3">
                    <a
                      href=""
                      className="flex space-x-1 items-center text-gray-800 font-semibold text-xs"
                    >
                      <img
                        src={article.source.logo}
                        alt={article.source.name}
                        className="w-5 h-5 rounded-full"
                      />
                      <span>{article.source.name}</span>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-gray-700 text-sm font-semibold">
                {article.title}
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
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
