import { HomeIcon, NotificationIcon, SettingsIcon } from '../icons'
import Logo from './Logo'
import SideNavItem from './SideNavItem'

export default function SideNav() {
  return (
    <aside>
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 ">
        <Logo />
      </div>
      <ul>
        <SideNavItem url="/" text="Home" icon={HomeIcon} key={1} />
        <SideNavItem
          url="/settings"
          text="Ajustes"
          icon={SettingsIcon}
          key={2}
        />
        <SideNavItem
          url="/notifications"
          text="Notificações"
          icon={NotificationIcon}
          key={3}
        />
      </ul>
    </aside>
  )
}
