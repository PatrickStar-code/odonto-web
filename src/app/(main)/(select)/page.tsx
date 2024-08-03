import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center">
      <h1 className="text-gray-200 text-5xl">
        Você é um dentista ou um paciente?
      </h1>

      <div className="flex flex-row flex-wrap gap-12 mt-12">
        <Link
          href="/Cliente"
          className="flex flex-col items-center group gap-2"
        >
          <Image
            className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300"
            src="https://picsum.photos/seed/a/150/150"
            alt="Client"
            width={150}
            height={150}
          />
          <p className="text-gray-500 group-hover:text-gray-300"> Cliente</p>
        </Link>

        <Link
          href="/Dentist"
          className="flex flex-col items-center group gap-2"
        >
          <Image
            className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300 w-[9.375rem] h-[9.375rem]"
            src="https://images.unsplash.com/photo-1667133295308-9ef24f71952e?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dentist"
            width={150}
            height={150}
          />
          <p className="text-gray-500 group-hover:text-gray-300">Dentista</p>
        </Link>
      </div>
    </div>
  )
}
