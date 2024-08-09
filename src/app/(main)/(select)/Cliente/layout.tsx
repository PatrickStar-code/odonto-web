'use client'

import ActivelinkClient from '@/app/components/activeLinkClient'
import { Button, Navbar } from 'flowbite-react'
import Image from 'next/image'

const Links = [
  { PathName: 'Home', Path: '/Cliente' },
  { PathName: 'Sobre', Path: '/' },
  { PathName: 'Contato', Path: '/' },
]
export default function layoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar
        fluid
        rounded
        className="p-2 w-full z-50 border-b-2 shadow-xl sticky top-0"
      >
        <Navbar.Brand href="/Cliente">
          <Image
            src="/imgs/brand.png"
            className="mr-3"
            alt="Flowbite React Logo"
            width={50}
            height={25}
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="bg-primary hover:bg-highlight ">
            Get started
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {Links.map((link) => (
            <ActivelinkClient key={link.PathName} href={link.Path}>
              {link.PathName}
            </ActivelinkClient>
          ))}
        </Navbar.Collapse>
      </Navbar>
      {children}
      <div className="fixed bottom-1 right-1 animate-bounce">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold p-4 rounded-full shadow-lg">
          <Image
            src="/imgs/whatsapp.png"
            width={40}
            height={40}
            alt="whatsapp"
          />
        </button>
      </div>
    </>
  )
}
