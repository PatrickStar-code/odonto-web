'use client'

import FooterPacient from '@/app/components/Patient/footer'
import NavBarClient from '@/app/components/Patient/navBarClient'
import { PacientProvider } from '@/app/Context'
export default function layoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PacientProvider>
        <NavBarClient />
        {children}
        <FooterPacient />
      </PacientProvider>
    </>
  )
}
