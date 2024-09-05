import React from 'react'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

type ActiveLinkProps = LinkProps & {
  children: React.ReactNode
}

export default function ActiveLinkMobile({
  href,
  children,
  ...props
}: ActiveLinkProps) {
  const activeLink = usePathname()
  const isActive = activeLink === href
  return (
    <Link
      href={href}
      className={`${isActive ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} block px-3 py-2 rounded-md text-base font-medium`}
      {...props}
    >
      {children}
    </Link>
  )
}
