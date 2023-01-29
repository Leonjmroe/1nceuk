import { useReducer, createContext } from 'react'
import { reducer, initialState } from "./reducer"

export const StateContext = createContext({
  state: initialState,
  // dispatch: () => null
})

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={[ state, dispatch ]}>
      { children }
    </StateContext.Provider>
  )
}