'use client'

import { usePathname } from 'next/navigation'
import CheckCookiesDentist from '@/app/actions/checkCookiesDentist'
import { useEffect } from 'react'
import SideBarDentist from '@/app/components/Dentist/sidebar'

export default function LayoutDentist({
  children,
}: {
  children: React.ReactNode
}) {
  const path = usePathname()

  useEffect(() => {
    CheckCookiesDentist()
  }, [])

  return (
    <>
      {path === '/Dentista' ? (
        <>{children}</>
      ) : (
        <div className="flex">
          <SideBarDentist />
          <main className="flex-1 p-4 w-[calc(100%-80px)] pt-0 md:pt-20 bg-gray-100 min-h-screen">
            {children}
          </main>
        </div>
      )}
    </>
  )
}
