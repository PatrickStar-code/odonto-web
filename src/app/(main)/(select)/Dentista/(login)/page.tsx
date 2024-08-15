'use server'

import FormDentist from '@/app/components/formDentist'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home() {
  const responseCookies = cookies()

  if (responseCookies.has('userName')) {
    redirect('/Dentista/Home')
  }
  return (
    <div className="h-screen flex">
      <div
        className="hidden lg:flex w-full lg:w-1/2 bg-[url('https://images.unsplash.com/photo-1495573020741-8a2f372bbec3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover shadow-2xl
          justify-around items-center"
      ></div>
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white flex-col space-y-8">
        <div className="w-full px-8 md:px-32 lg:px-24">
          <FormDentist />
        </div>
      </div>
    </div>
  )
}
