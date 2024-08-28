'use client'

import NavBarClient from '@/app/components/Client/navBarClient'

// import ActivelinkClient from '@/app/components/Client/activeLinkClient'
// import Image from 'next/image'

// const Links = [
//   { PathName: 'Home', Path: '/Cliente' },
//   { PathName: 'Sobre', Path: '/' },
//   { PathName: 'Contato', Path: '/' },
// ]
export default function layoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBarClient />
      {children}
    </>
  )
}
