import { createContext, ReactNode } from 'react'

interface AppProviderProps {
  children: ReactNode
}

const AppContext = createContext({
  name: ''
})

export function AppProvider(props: AppProviderProps) {
  return (
    <AppContext.Provider
      value={{
        name: 'Test context API'
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
