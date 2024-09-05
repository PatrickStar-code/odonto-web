import TreatmentsInfoCard from '@/app/components/Patient/treatmentsInfoCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tratamentos',
  description: 'Tratamentos page',
  keywords: 'home, Tratamentos page',
}

export default function Tratamentos() {
  return (
    <section>
      <div
        className="relative w-full h-[30rem] bg-cover bg-center"
        style={{ backgroundImage: `url('/imgs/TratamentosImg.png')` }}
      >
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Tratamentos</h1>
            <p className="text-lg md:text-2xl">
              Saiba mais sobre nossos proprios tratamentos
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <TreatmentsInfoCard />
          {Array.from({ length: 4 }).map((_, index) => (
            <TreatmentsInfoCard key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
