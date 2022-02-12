import { FormattedInteractionsPostData } from "~/services/db/formatters.server"
import InteractionCard from "./InteractionCard"

type Props = {
  interactions: FormattedInteractionsPostData[]
}

const Posts: React.FC<Props> = ({ interactions }) => {
  return (
    <div className="bg-white">
      <div className="py-8 px-4 sm:py-8 sm:px-6 lg:px-0">
        <h2 className="sr-only">artciles</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {interactions.map((post, i) => (
            <InteractionCard post={post} index={i} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Posts
