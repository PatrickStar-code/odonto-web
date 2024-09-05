'use client'
import { usePacientContext } from '@/app/Context'
import { Modal, ModalAction } from 'keep-react'
import { Calendar } from 'lucide-react'

import Image from 'next/image'
import { ModalScheduling } from './modalscheduling'
import { ModalRegister } from './modalRegister'

export default function MainSection() {
  const { Pacient } = usePacientContext()
  return (
    <section className="bg-white mb-20 md:mb-52 xl:mb-72">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center xl:flex-row xl:justify-start">
          {Pacient ? (
            <>
              <div className="mt-28 text-center xl:text-left">
                <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-normal mb-6">
                  Agende
                  <br />
                  um <span className="text-primary">Atendimento</span>
                </h1>

                <p className="font-normal text-xl text-gray-400 leading-relaxed mb-12 whitespace-pre-line">
                  Reserve seu horário e cuide do seu sorriso com um atendimento
                  especializado
                </p>
                <div className="flex justify-center xl:justify-start">
                  <Modal>
                    <ModalAction asChild>
                      <button className="bg-primary hover:bg-highlight px-6 py-4 text-white font-semibold text-lg rounded-xl transition ease-in-out duration-200 flex items-center">
                        Agendar <Calendar className="ml-2" />
                      </button>
                    </ModalAction>
                    <ModalScheduling />
                  </Modal>
                </div>
              </div>

              <div className="hidden xl:block ml-8">
                <Image
                  src="/svgs/MainSectionClient.svg"
                  alt={''}
                  width={808}
                  height={900}
                />
              </div>
            </>
          ) : (
            <>
              <div className="mt-28 text-center xl:text-left">
                <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-normal mb-6">
                  Transforme seu
                  <br />
                  <span className="text-primary">Sorriso</span>
                </h1>

                <p className="font-normal text-xl text-gray-400 leading-relaxed mb-12 whitespace-pre-line">
                  Cadastre-se para acessar atendimento especializado e
                  transformar seu sorriso
                </p>
                <div className="flex justify-center xl:justify-start">
                  <Modal>
                    <ModalAction asChild>
                      <button className="bg-primary hover:bg-highlight px-6 py-4 text-white font-semibold text-lg rounded-xl transition ease-in-out duration-200 flex items-center">
                        Registrar-se
                      </button>
                    </ModalAction>
                    <ModalRegister />
                  </Modal>
                </div>
              </div>

              <div className="hidden xl:block ml-8 rounded-md shadow-lg">
                <Image
                  src="/imgs/dentistSmiling.png"
                  alt={''}
                  width={900}
                  height={900}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
