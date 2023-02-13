import { HomeIcon, NotificationIcon, SettingsIcon } from '../icons'
import SideNavItem from './SideNavItem'

export default function SideNav() {
  return (
    <aside>
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
