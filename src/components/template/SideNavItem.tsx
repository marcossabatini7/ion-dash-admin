import Link from 'next/link'

interface SideNavItemProps {
  url: string
  text: string
  icon: any
}

export default function SideNavItem(props: SideNavItemProps) {
  return (
    <li className="hover:bg-gray-100">
      <Link
        href={props.url}
        className="flex flex-col justify-center items-center h-20 w-full p-2"
      >
        {props.icon}
        <span className="text-sm font-light text-gray-600">{props.text}</span>
      </Link>
    </li>
  )
}
