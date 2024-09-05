'use client'
import {
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalHeader,
  Spinner,
} from 'keep-react'

import { UserCircle } from 'lucide-react'

import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePacientContext } from '@/app/Context'
import SetCookiesPatient from '@/app/actions/setCookiesPatients'

const LoginSchema = z.object({
  login: z.string(),
  password: z
    .string()
    .min(8, { message: 'A senha precisa conter 8 ou mais caracteres' }),
})

export type LoginSchemaType = z.infer<typeof LoginSchema>

export function ModalLogin() {
  const { Login, loading } = usePacientContext()

  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  })

  async function onSubmit(data: LoginSchemaType) {
    try {
      reset()
      const response = await Login(data)
      console.log(loading)
      if (response) {
        console.log('Login efetuado com sucesso')
        const cookiesSet = await SetCookiesPatient(data.login)
        cookiesSet === 'Cookies Criados'
          ? console.log('Usuário Logado')
          : console.error('Erro ao configurar cookies:', cookiesSet)
      } else {
        console.log('Login ou senha Incorretos')
      }
    } catch (error) {
      console.error('Erro durante o login:', error)
    }
  }

  return (
    <ModalContent className="relative l rounded-3xl  bg-gray-100 shadow-md">
      <ModalClose className="absolute right-4 top-4 z-10" />
      <ModalHeader className="mb-6 space-y-3">
        <div className="bg-gray-100 rounded-full flex items-center justify-center">
          <UserCircle size={50} />
        </div>
        <div className="space-y-1">
          <ModalDescription>
            <label className="block  text-lg text-gray-700 text-center font-semibold">
              Logar
            </label>
            <form
              method="#"
              action="#"
              className="mt-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <input
                  type="text"
                  {...register('login', { required: true })}
                  placeholder="Login"
                  className="mt-1 block w-full text-center border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  {...register('password', { required: true })}
                  placeholder="Senha"
                  className="mt-1  text-center block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                {loading ? (
                  <button
                    className="bg-blue-400 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                    disabled
                  >
                    Logando <Spinner className="ml-1" color="info" size="sm" />
                  </button>
                ) : (
                  <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Logar
                  </button>
                )}
              </div>
            </form>
          </ModalDescription>
        </div>
      </ModalHeader>
    </ModalContent>
  )
}
