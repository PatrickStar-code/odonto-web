'use client'

import { LockKeyhole, User } from 'lucide-react'
import React from 'react'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import SetCookiesDentist from '../../actions/setCookiesDentist'

export default function FormDentist() {
  const LoginSchema = z.object({
    login: z.string(),
    password: z
      .string()
      .min(8, { message: 'A senha precisa conter 8 ou mais caracteres' }),
  })

  type LoginSchemaType = z.infer<typeof LoginSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  })

  async function onSubmit(data: LoginSchemaType) {
    if (data.login === 'admin' && data.password === 'admin123') {
      const cookiesSet = await SetCookiesDentist(data.login)
      cookiesSet === 'Cookies Criados'
        ? console.log('Usuário Logado')
        : console.error('Erro ao configurar cookies:', cookiesSet)
    }
  }

  return (
    <form className="bg-white rounded-md shadow-2xl p-5">
      <h1 className="text-gray-800 font-bold text-2xl mb-4">
        Bem vindo de Volta!
      </h1>

      <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
        <User />
        <input
          id="Login"
          className=" pl-2 w-full outline-none border-none"
          type="text"
          {...register('login')}
          placeholder="Login"
        />
      </div>
      <div className="flex items-center border-2 mb py-2 px-3 rounded-2xl">
        <LockKeyhole />
        <input
          id="senha"
          className=" pl-2 w-full outline-none border-none"
          type="password"
          {...register('password')}
          placeholder="Senha"
        />
      </div>

      {errors.login && <p className="text-red-500">{errors.login.message}</p>}

      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}

      <button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        className="block w-full bg-primary mt-5 py-2 rounded-2xl hover:bg-highlight hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
      >
        Login
      </button>
    </form>
  )
}
