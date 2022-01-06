import InteractionCard from "~/components/interaction-card"

import type { MetaFunction } from "remix"

interface Props {}

const ExploreIndexRoute: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header>
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            All interactions
          </h1>
        </div>
      </header>
      <main>
        <div className="sm:px-6 lg:px-8">
          <InteractionCard />
        </div>
      </main>
    </>
  )
}

export const meta: MetaFunction = () => {
  return {
    title: "Explore | DesignBits",
    description: "DesignBits - your daily dose of design inspirations",
  }
}

export default ExploreIndexRoute
