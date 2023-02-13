import Link from 'next/link'

interface SideNavItemProps {
  text: string
  icon: any
  url?: string
  className?: string
  onClick?: (e: React.MouseEvent) => void
}

export default function SideNavItem(props: SideNavItemProps) {
  function renderLink() {
    return (
      <div
        className={`flex flex-col justify-center items-center h-20 w-full p-2  text-gray-600 dark:text-gray-200 ${props?.className}`}
      >
        {props.icon}
        <span className="text-sm font-light">{props.text}</span>
      </div>
    )
  }

  return (
    <li
      onClick={props.onClick}
      className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
    >
      {props?.url ? <Link href={props.url}>{renderLink()}</Link> : renderLink()}
    </li>
  )
}
