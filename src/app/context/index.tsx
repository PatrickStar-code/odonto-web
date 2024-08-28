import { createContext, useContext, useState } from 'react'

interface Client {
  id: string
  name: string
  email: string
  phone: string
  birthdate: Date
  cpf: string
}

type ClientContextType = {
  client: Client | undefined
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

const ClientContext = createContext({} as ClientContextType)

export function ClientProvider({ children }: { children: React.ReactNode }) {
  const [client, setUser] = useState<Client | undefined>()

  return (
    <ClientContext.Provider value={{ client }}>
      {children}
    </ClientContext.Provider>
  )
}

export function useClientContext() {
  return useContext(ClientContext)
}
