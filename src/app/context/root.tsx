import { User } from "@prisma/client"
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"

type State = { user: User | null; isAuthModalOpen?: boolean }
type RootContextProviderProps = {
  children: React.ReactNode
  initState: State
}

const RootContext = createContext<
  | { rootState: State; setAuthModalOpen: (isAuthModalOpen: boolean) => void }
  | undefined
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
  const [rootState, setRootState] = useState(initState)

  const setAuthModalOpen = useCallback(
    (isAuthModalOpen: boolean) => {
      setRootState({ ...rootState, isAuthModalOpen })
    },
    [rootState],
  )

  const value = useMemo(
    () => ({ rootState, setAuthModalOpen }),
    [rootState, setAuthModalOpen],
  )

  return <RootContext.Provider value={value}>{children}</RootContext.Provider>
}

function useRootContext() {
  const context = useContext(RootContext)
  if (context === undefined) {
    throw new Error("useRootContext must be used within a RootContextProvider")
  }
  return context
}

export { RootContextProvider, useRootContext }
