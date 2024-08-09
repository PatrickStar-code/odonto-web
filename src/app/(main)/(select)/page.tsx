import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <Image
          src="/imgs/HomeImg.png"
          width={1280}
          height={500}
          alt=""
          id="img"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3  h-screen px-6 lg:px-16 xl:px-12
        flex  justify-center items-center"
      >
        <div className="w-full h-100 flex flex-col items-center gap-6">
          <h1 className="text-xl md:text-2x text-center  font-bold leading-tight mt-12">
            Selecione Seu Usuario:
          </h1>

          <Link href={'/Dentista'} className="hover:bg-white">
            <Image
              src="/imgs/Dentist.png"
              id="dentist"
              width={150}
              height={50}
              alt="Logo"
            />
            <h1 className="text-xl text-center">Dentista</h1>
          </Link>

          <hr className="my-6 border-gray-300 w-full hover:bg-white" />

          <Link href={'/Cliente'}>
            <Image
              src="/imgs/Client.png"
              id="client"
              width={150}
              height={60}
              alt="Logo"
            />
            <h1 className="text-xl text-center">Cliente</h1>
          </Link>
        </div>
      </div>
    </section>
  )
}
