import { Post } from "@prisma/client"
import * as React from "react"

type Dispatch = React.Dispatch<React.SetStateAction<State>>
type State = Post | null
type PostContextProviderProps = {
  children: React.ReactNode
  initState: Post | null
}

const PostContext = React.createContext<
  { postData: State; setPostData: Dispatch } | undefined
>(undefined)

function PostContextProvider({
  children,
  initState,
}: PostContextProviderProps) {
  const [postData, setPostData] = React.useState(initState)
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { postData, setPostData }
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}

function usePostData() {
  const context = React.useContext(PostContext)
  if (context === undefined) {
    throw new Error("usePostData must be used within a PostContextProvider")
  }
  return context
}

export { PostContextProvider, usePostData }
