'use server '
import Link from 'next/link'
import { Calendar, HouseLine, SignOut } from 'phosphor-react'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarItem,
  SidebarList,
} from 'keep-react'
import { Table } from 'lucide-react'

type LinkProps = {
  PathName: string
  Path: string
  Icon: React.ReactNode
}

const Links: LinkProps[] = [
  {
    PathName: 'Home',
    Path: '/Dentista/Home',
    Icon: <HouseLine size={20} />,
  },
  {
    PathName: 'Calendario',
    Path: '/Dentista/Calendario',
    Icon: <Calendar size={20} />,
  },
  {
    PathName: 'Agendamentos',
    Path: '/Dentista/Agendamentos',
    Icon: <Table size={20} />,
  },
]

export default function SideBarDentist() {
  // function deleteCookie(name: string) {
  //   document.cookie = name + '=; Max-Age=0; path=/Dentista;'
  // }

  async function exit() {
    try {
      // Apaga o cookie no lado do cliente
      // deleteCookie('userName')
      // window.location.href = '/Dentista'
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  return (
    <Sidebar className="max-w-max h-screen sticky top-0 z-40 bg-white shadow-md overflow-y-auto">
      <SidebarBody className="space-y-4">
        <Link href="/" className="inline-flex items-center gap-1">
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-metal-900 text-heading-6 font-semibold text-white ">
            K.
          </span>
        </Link>
        <SidebarList className="space-y-1 flex-col gap-4 flex">
          {Links.map((link) => (
            <Link href={link.Path} key={link.PathName}>
              <SidebarItem> {link.Icon}</SidebarItem>
            </Link>
          ))}
        </SidebarList>
      </SidebarBody>
      <SidebarFooter>
        <SidebarItem className="text-gray-500" onClick={exit}>
          <SignOut size={20} />
        </SidebarItem>
      </SidebarFooter>
    </Sidebar>
  )
}
