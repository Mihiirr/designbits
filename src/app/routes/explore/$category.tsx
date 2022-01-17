import { Post, Source, User } from "@prisma/client"
import groupBy from "lodash.groupby"
import { LoaderFunction, MetaFunction, useLoaderData } from "remix"
import { navItems } from "~/components/CategoriesNav"
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
  category: string
  interactions: InteractionData[]
}

const categoryMap = groupBy(navItems, "id")

export let loader: LoaderFunction = async ({ params }) => {
  const categoryId = params.category
  if (!categoryId) {
    return
  }

  const data = await db.post.findMany({
    include: {
      Source: true,
      CreatedBy: true,
    },
  })
  return { category: categoryMap[categoryId][0].name, interactions: data }
}

const CategoryPage: React.FC<Props> = () => {
  const { category, interactions } = useLoaderData<LoaderData>()
  return (
    <>
      <header>
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {category}
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

export const meta: MetaFunction = ({ params }) => {
  const categoryId = params.category || ""

  return {
    title:
      (categoryMap[categoryId]?.[0]?.name || "") + " interactions | DesignBits",
    description: `discover ${categoryId} interactions.`,
  }
}

export default CategoryPage
