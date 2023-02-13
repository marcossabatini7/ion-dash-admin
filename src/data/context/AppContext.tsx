import { createContext, ReactNode, useState } from 'react'

export type Theme = 'dark' | ''
const DEFAULT_THEME: Theme = 'dark'

interface AppContextProps {
  theme?: Theme
  changeTheme?: () => void
  children?: ReactNode
}

const AppContext = createContext<AppContextProps>({
  theme: DEFAULT_THEME
})

export function AppProvider(props: AppContextProps) {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME)

  function changeTheme() {
    setTheme((old) => (old === '' ? 'dark' : ''))
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        changeTheme
      }}
    >
      {props?.children}
    </AppContext.Provider>
  )
}

export default AppContext
