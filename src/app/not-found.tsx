import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import svg from '../../public/svgs/404.svg'

export default function Custom404() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-around">
      <div className="container flex flex-col gap-6  md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Desculpe, não conseguimos encontrar esta página.{' '}
          </p>
          <p className="mb-8 mt-2">
            Mas não se preocupe, você pode encontrar muitas outras coisas em
            nossa página inicial.{' '}
          </p>

          <Link href="/">
            <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
              Voltarar para a pagina principal
            </button>
          </Link>
        </div>
        <div className="max-w-lg">
          <Image src={svg} alt="404" width={400} height={400} />
        </div>
      </div>
    </div>
  )
}
