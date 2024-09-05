'use client'
import {
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalHeader,
} from 'keep-react'
import { ClipboardPenLine } from 'lucide-react'

export function ModalRegister() {
  return (
    <ModalContent className="relative  rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
      <ModalClose className="absolute right-4 top-4 z-10" />
      <ModalHeader className="mb-6 space-y-3">
        <div className="bg-gray-100 rounded-full flex items-center justify-center">
          <ClipboardPenLine width={50} height={50} />
        </div>
        <div className="space-y-1">
          <ModalDescription>
            <label className="block  text-lg text-gray-700 text-center font-semibold">
              Registrar-se
            </label>
            <form method="#" action="#" className="mt-4">
              <div>
                <input
                  type="text"
                  placeholder="Login"
                  className="mt-1 block w-full border-none text-center bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                  type="email"
                  placeholder="Email"
                  className="mt-1 block w-full border-none text-center bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                  type="Senha"
                  placeholder="Senha"
                  className="mt-1 block w-full text-center border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  placeholder="Confirmar Senha"
                  className="mt-1 block text-center w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Registrar
                </button>
              </div>
            </form>
          </ModalDescription>
        </div>
      </ModalHeader>
    </ModalContent>
  )
}
