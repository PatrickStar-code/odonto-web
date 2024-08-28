'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import ActivelinkClient from './activeLinkClient'
import { MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import { useClientContext } from '@/app/context'
import {
  Avatar,
  AvatarImage,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList,
} from 'keep-react'

const Links = [
  { PathName: 'Home', Path: '/Cliente' },
  { PathName: 'Sobre', Path: '/' },
  { PathName: 'Contato', Path: '/' },
]

export default function NavBarClient() {
  const [isOpen, setIsOpen] = useState(false)
  const { client } = useClientContext()

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-white text-lg font-bold">
            <Image src="/imgs/brand.png" width={40} height={50} alt="Logo" />
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch">
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                {Links.map((link) => (
                  <ActivelinkClient key={link.PathName} href={link.Path}>
                    {link.PathName}
                  </ActivelinkClient>
                ))}
              </div>
            </div>
          </div>
          {!client ? (
            <div className=" items-center gap-4 hidden md:flex">
              <button className="bg-primary text-white font-semibold py-2 px-4 rounded transform transition-transform duration-200 ease-in-out hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Logar
              </button>

              <button className="bg-highlight text-white font-semibold py-2 px-4 rounded transform transition-transform duration-200 ease-in-out hover:bg-[#0d6e8f] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                Registrar-se
              </button>
            </div>
          ) : (
            <Dropdown placement="bottom-end">
              <DropdownAction asChild>
                <Avatar>
                  <AvatarImage src="/images/avatar/avatar-3.png" />
                </Avatar>
              </DropdownAction>
              <DropdownContent className="border border-metal-100">
                <DropdownList>
                  <DropdownItem>Statistics</DropdownItem>
                  <DropdownItem>Duplicate</DropdownItem>
                  <DropdownItem>Account</DropdownItem>
                  <DropdownItem>Logout</DropdownItem>
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          )}

          <div className=" inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {Links.map((link) => (
              <Link
                key={link.PathName}
                href={link.Path}
                className="text-gray-700 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.PathName}
              </Link>
            ))}
            {client && (
              <div className="mt-6  gap-4 flex flex-col">
                <button className="bg-primary text-white font-semibold py-2 px-4 rounded transform transition-transform duration-200 ease-in-out hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Logar
                </button>

                <button className="bg-highlight text-white font-semibold py-2 px-4 rounded transform transition-transform duration-200 ease-in-out hover:bg-[#0d6e8f] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                  Registrar-se
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
