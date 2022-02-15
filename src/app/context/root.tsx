import { User } from "@prisma/client"
import * as React from "react"

type Dispatch = React.Dispatch<React.SetStateAction<State>>
type State = { user: User | null }
type RootContextProviderProps = {
  children: React.ReactNode
  initState: {
    user: User | null
  }
}

const RootContext = React.createContext<
  { rootState: State; setRootState: Dispatch } | undefined
>(undefined)

// function rootStateReducer(state: State, action: Action) {
//   switch (action.type) {
//     case "increment": {
//       return { user: state.user }
//     }
//     default: {
//       throw new Error(`Unhandled action type: ${action.type}`)
//     }
//   }
// }

function RootContextProvider({
  children,
  initState,
}: RootContextProviderProps) {
  const [rootState, setRootState] = React.useState(initState)
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { rootState, setRootState }
  return <RootContext.Provider value={value}>{children}</RootContext.Provider>
}

function useRootContext() {
  const context = React.useContext(RootContext) || {
    rootState: {
      user: null,
    },
  }
  // if (context === undefined) {
  //   throw new Error("useRootContext must be used within a RootContextProvider")
  // }
  return context
}

export { RootContextProvider, useRootContext }
