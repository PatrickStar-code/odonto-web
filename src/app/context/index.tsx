'use client'

import { createContext, useContext, useState } from 'react'
import { LoginSchemaType } from '../components/Patient/modalLogin'

interface Pacient {
  id: string
  name: string
  email: string
  phone: string
  birthdate: Date
  cpf: string
}

type PacientContextType = {
  Pacient: Pacient | undefined
  Login: (data: LoginSchemaType) => Promise<boolean>
  Register: () => void
  ResetUser: () => void
  loading: boolean
}

const DentistContext = createContext({})

export function useDentistContext() {
  return useContext(DentistContext)
}

export function DentistProvidar({ children }: { children: React.ReactNode }) {
  return (
    <DentistContext.Provider value={{}}>{children}</DentistContext.Provider>
  )
}

const PacientContext = createContext({} as PacientContextType)

export function PacientProvider({ children }: { children: React.ReactNode }) {
  const [Pacient, setPacient] = useState<Pacient | undefined>()
  const [loading, setLoading] = useState(false)

  function Login(data: LoginSchemaType): Promise<boolean> {
    setLoading(true)

    return new Promise((resolve) => {
      if (data.login === 'teste' && data.password === 'teste123') {
        setTimeout(() => {
          setPacient({
            id: '1',
            name: 'Patrick',
            email: 'pX9iF@example.com',
            phone: '11999999999',
            birthdate: new Date(),
            cpf: '11111111111',
          })
          resolve(true)
        }, 1000)
      } else {
        resolve(false)
      }
    })
  }
  function Register() {
    setTimeout(() => {
      setPacient({
        id: '1',
        name: 'Patrick',
        email: 'pX9iF@example.com',
        phone: '11999999999',
        birthdate: new Date(),
        cpf: '11111111111',
      })
    }, 1000)
  }

  function ResetUser() {
    setPacient(undefined)
  }
  return (
    <PacientContext.Provider
      value={{ Pacient, loading, Login, Register, ResetUser }}
    >
      {children}
    </PacientContext.Provider>
  )
}

export function usePacientContext() {
  return useContext(PacientContext)
}
