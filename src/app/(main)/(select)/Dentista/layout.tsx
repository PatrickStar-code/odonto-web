'use client'

import React, { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { AlignJustify, CalendarCheck2, HouseIcon } from 'lucide-react'

export default function LayoutDentist({
  children,
}: {
  children: React.ReactNode
}) {
  const path = usePathname()
  const [open, setOpen] = React.useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setOpen(false)
    }
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <>
      {path === '/Dentista' ? (
        <>{children}</>
      ) : (
        <div className="min-h-screen flex flex-col">
          <header className="bg-slate-100 drop-shadow-2xl sticky top-0 h-14 flex justify-between p-4 items-center font-semibold uppercase">
            <div className="flex items-center">
              <button
                className={`bg-primary p-4 hover:bg-highlight transform transition-transform duration-300 ease-out ${
                  open ? 'translate-x-[67px]' : 'translate-x-0'
                } md:hidden`}
                onClick={(e) => {
                  e.stopPropagation()
                  setOpen(!open)
                }}
              >
                <AlignJustify className="text-white" />
              </button>
              <h1 className="hidden md:block ml-4">Agenda Dentista</h1>
            </div>
            <Image
              src="/imgs/brand.png"
              alt="Logo"
              width={50}
              height={25}
              className="mr-3 hidden md:block"
            />
            <h1 className="md:block">Dentista</h1>
          </header>
          <div className="flex flex-col md:flex-row flex-1">
            <aside
              ref={sidebarRef}
              className={`bg-slate-100 transform transition-transform duration-300 ease-out ${
                open ? 'translate-x-0' : '-translate-x-full'
              } fixed inset-y-0 left-0 w-20 drop-shadow-2xl md:relative md:translate-x-0 md:w-60`}
            >
              <ul className="flex flex-col p-2">
                <li className="hover:bg-slate-300 cursor-pointer p-2 rounded-lg">
                  <a
                    href="/Dentista"
                    className="flex gap-2 justify-center md:justify-between"
                  >
                    <p className="hidden md:block">Home</p> <HouseIcon />
                  </a>
                </li>
                <li className="hover:bg-slate-300 cursor-pointer p-2 rounded-lg">
                  <a
                    href="/Dentista"
                    className="flex gap-2 justify-center md:justify-between"
                  >
                    <p className="hidden md:block">Agenda</p> <CalendarCheck2 />
                  </a>
                </li>
              </ul>
            </aside>
            <main className="flex-1 md:ml-60">{children}</main>
          </div>
        </div>
      )}
    </>
  )
}
