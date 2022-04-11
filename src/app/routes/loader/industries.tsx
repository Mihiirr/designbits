import { LoaderFunction } from "remix"
import { db } from "~/services/db/client.server"
import { OkResponse } from "~/utils/response-helpers.server"

type Props = {}

const Industries = (props: Props) => {
  return <div>Oops... You should not see this.</div>
}

export const loader: LoaderFunction = async () => {
  const industries = await db.industry.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
    },
    orderBy: {
      name: "asc",
    },
  })

  return OkResponse({
    data: industries,
    errors: [],
  })
}

export default Industries
