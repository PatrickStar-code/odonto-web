import React from 'react'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

type ActiveLinkProps = LinkProps & {
  children: React.ReactNode
}

export default function ActivelinkClient({
  href,
  children,
  ...props
}: ActiveLinkProps) {
  const activeLink = usePathname()
  const isActive = activeLink === href
  return (
    <Link
      href={href}
      className={`${isActive ? 'text-blue-500' : 'text-gray-500'} text-center p-4 md: font-bold`}
      {...props}
    >
      {children}
    </Link>
  )
}
