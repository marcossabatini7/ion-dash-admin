import { HomeIcon, LogoutIcon, NotificationIcon, SettingsIcon } from '../icons'
import Logo from './Logo'
import SideNavItem from './SideNavItem'

export default function SideNav() {
  return (
    <aside className="flex flex-col">
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 ">
        <Logo />
      </div>
      <ul className="flex-grow">
        <SideNavItem url="/" text="Home" icon={HomeIcon} key="home" />
        <SideNavItem
          url="/settings"
          text="Ajustes"
          icon={SettingsIcon}
          key="settings"
        />
        <SideNavItem
          url="/notifications"
          text="Notificações"
          icon={NotificationIcon}
          key="notifications"
        />
      </ul>
      <ul>
        <SideNavItem
          onClick={(e) => console.log('logout')}
          text="Sair"
          icon={LogoutIcon}
          key="logout"
          className="text-red-600 hover:bg-red-400 hover:text-white"
        />
      </ul>
    </aside>
  )
}
