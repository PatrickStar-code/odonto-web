'use server'

import { cookies } from 'next/headers'

export default async function SetCookiesPatient(userName: string) {
  try {
    const responseCookies = cookies()

    responseCookies.set('userName', userName, {
      expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
      path: '/Paciente',
    })

    console.log('Cookies configurados:', responseCookies.getAll())
    return 'Cookies Criados'
  } catch (error) {
    console.error('Erro ao configurar cookies:', error)
    throw error
  }
}
