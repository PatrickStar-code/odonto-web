'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function CheckCookiesDentist() {
  const responseCookies = cookies()
  if (!responseCookies.has('userName')) {
    redirect('/Dentista')
  }
}
