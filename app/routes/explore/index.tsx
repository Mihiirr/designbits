import InteractionCard from "~/components/interaction-card"

interface Props {}

const ExploreIndexRoute: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header>
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="text-gray-900 text-3xl font-bold leading-tight">
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

export default ExploreIndexRoute
