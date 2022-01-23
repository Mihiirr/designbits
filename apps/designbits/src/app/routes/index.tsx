import { LoaderFunction, redirect } from "remix"

export const loader: LoaderFunction = ({ request }) => {
  return redirect("/explore/all/", 301)
}
