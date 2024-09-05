'use server'
import { cookies } from 'next/headers'

export default async function CheckCookiesPatient() {
  const responseCookies = cookies()
  if (responseCookies.has('userName')) {
    return true
  } else {
    return false
  }
}
