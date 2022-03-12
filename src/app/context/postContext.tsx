import * as React from "react"
import { FormattedSingleInteractionsPostData } from "~/types/formatters"

type Dispatch = React.Dispatch<React.SetStateAction<State>>
type State = FormattedSingleInteractionsPostData | null
type PostContextProviderProps = {
  children: React.ReactNode
  initState: State
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
