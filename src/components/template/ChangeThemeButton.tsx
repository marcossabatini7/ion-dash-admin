import useAppData from '@/data/hook/useAppData'
import { MoonIcon, SunIcon } from '../icons'

export default function ChangeThemeButton() {
  const { theme, changeTheme } = useAppData()

  return theme === '' ? (
    <div
      className="hidden bg-gradient-to-r from-gray-500 to-gray-900 w-14 lg:w-24 h-8 sm:flex items-center justify-end cursor-pointer p-1 rounded-full"
      onClick={changeTheme}
    >
      <div className="hidden lg:flex items-center mr-2 text-gray-300">
        <span>Escuro</span>
      </div>
      <div className="flex items-center justify-center bg-black text-yellow-300 w-6 h-6 rounded-full">
        {MoonIcon('w-4 h-4')}
      </div>
    </div>
  ) : (
    <div
      className="hidden bg-gradient-to-r from-yellow-300 to-yellow-600 w-14 lg:w-24 h-8 sm:flex items-center justify-start cursor-pointer p-1 rounded-full"
      onClick={changeTheme}
    >
      <div className="flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full">
        {SunIcon('w-4 h-4')}
      </div>
      <div className="hidden lg:flex items-center ml-5 text-white">
        <span>Claro</span>
      </div>
    </div>
  )
}
