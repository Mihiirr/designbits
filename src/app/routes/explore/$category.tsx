import { Post, Source, User } from "@prisma/client"
import { LoaderFunction, useLoaderData } from "remix"
import InteractionCard from "~/components/interaction-card"
import { db } from "~/services/db/prisma.server"

interface Props {}

type InteractionData = Post & {
  Source: Source
  CreatedBy: User
} & {
  backgroundColorClass: string
}

interface LoaderData {
  categoryId: string
  interactions: InteractionData[]
}

export let loader: LoaderFunction = async ({ params }) => {
  const categoryId = params.category

  const data = await db.post.findMany({
    include: {
      Source: true,
      CreatedBy: true,
    },
  })
  return { categoryId, interactions: data }
}

const CategoryPage: React.FC<Props> = ({ children }) => {
  const { categoryId, interactions } = useLoaderData<LoaderData>()
  return (
    <>
      <header>
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {categoryId}
          </h1>
        </div>
      </header>
      <main>
        <div className="sm:px-6 lg:px-8">
          <InteractionCard interactions={interactions} />
        </div>
      </main>
    </>
  )
}

export default CategoryPage
