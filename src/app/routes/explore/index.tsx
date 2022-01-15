import { LoaderFunction, redirect } from "remix"

export const loader: LoaderFunction = () => {
  return redirect("/explore/all", 301)
}
