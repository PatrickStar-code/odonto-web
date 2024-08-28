import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import {
  CalendarClock,
  MailOpen,
  MessageCircleQuestion,
  Users,
} from 'lucide-react'
import TreatmentsCard from '@/app/components/Client/treatmentsCard'
import MainSection from '@/app/components/Client/mainSection'
export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
  keywords: 'home, home page',
}

const treatments = [
  {
    id: 1,
    name: 'Ortodontia com aparelhos estéticos e autoligáveis',
    icon: '/imgs/corte.png',
  },
  {
    id: 2,
    name: 'Clareamento com LED Violeta',
    icon: '/imgs/clareamento.png',
  },
]

export default function HomeClient() {
  return (
    <>
      <MainSection />
      <main>
        <div className="container px-6 py-5 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2 ">
              <div>
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                  Por que Escolher a Nossa Clínica?
                </h1>

                <div className="mt-2">
                  <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                  <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                  <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    Nossos Serviços
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Explore nossos tratamentos dentários, desde limpezas e
                    exames de rotina até procedimentos estéticos e ortodontia
                    avançada. Garantimos cuidados de qualidade para atender às
                    suas necessidades.
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  <Users />
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    Equipe de Especialistas
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Conheça nossos dentistas qualificados e experientes. Nossa
                    equipe está dedicada a proporcionar um atendimento amigável
                    e profissional, garantindo um sorriso saudável e bonito. t
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  <CalendarClock />
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    Agendamento Online
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Agende sua consulta de forma prática e rápida pelo nosso
                    site. Escolha a data e hora que melhor se adequam à sua
                    agenda e receba um atendimento personalizado e eficiente.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
              <Image
                className="w-[28rem] h-[28rem]  xl:w-[34rem] xl:h-[34rem] rounded-full"
                alt=""
                src={'/imgs/Feature.jpg'}
                width={1020}
                height={1020}
              />
            </div>
          </div>

          <hr className="border-gray-200 my-12 dark:border-gray-700" />
        </div>
      </main>

      <section className="w-full flex h-full md:h-[28.125rem] flex-col  mb-6 md:mb-0  gap-6  md:flex-row items-center justify-center ">
        <div className="flex flex-col  md:w-1/2 ">
          <h1 className="text-center text-3xl  font-bold leading-tight md:text-[53px]  ">
            Algum de nossos
            <br />
            <span className="text-primary">Tratamentos</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-4  items-center">
          {treatments.map((treatment) => (
            <TreatmentsCard
              name={treatment.name}
              icon={treatment.icon}
              key={treatment.id}
            />
          ))}
        </div>
      </section>

      <section className=" flex flex-col md:flex-row items-center w-full justify-center gap-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d152031.11445641267!2d-2.277724!3d53.459771!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bade198f6a2ab%3A0xa06b7a1e162e18f9!2sOld%20Trafford%2C%20Stretford%2C%20Manchester%2C%20UK!5e0!3m2!1sen!2sid!4v1723244294730!5m2!1sen!2sid"
          width="600"
          height="450"
          loading="lazy"
          className="rounded-3xl w-[20rem] h-[28.125rem] md:w-[40rem] lg:w-[40rem] lg:h-[28.125rem] xl:w-[50rem] xl:h-[28.125rem] shadow-2xl"
        ></iframe>

        <div className="flex flex-col justify-center items-center md:w-1/4">
          <h1 className="font-semibold text-4xl flex md:text-2xl lg:text-4xl text-center leading-normal mb-4">
            Onde ficamos <MessageCircleQuestion className="ml-2" />
          </h1>
          <p className="font-normal text-lg text-textSecondary px-4 whitespace-pre-line">
            Estamos localizados no coração da cidade, com fácil acesso e
            estacionamento. Visite-nos e descubra um espaço moderno e acolhedor{' '}
            para o seu cuidado dental.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
          <div className="bg-primary flex p-8 flex-col lg:flex-row items-center justify-evenly py-14 rounded-3xl w-full">
            <div className="text-center lg:text-left mb-10 lg:mb-0">
              <h1 className="font-semibold text-white text-4xl md:text-5xl lg:text-7xl leading-normal mb-4">
                Entre em contato
              </h1>

              <p className="font-normal text-white text-md md:text-xl">
                Tem alguma dúvida?
                <br />
                Fale conosco! Utilizando este formulário <br />
                ou entre em contato pelo WhatsApp (32) 99999-9999. Estamos aqui
                para ajudar!
              </p>
            </div>

            <div className="hidden xl:block xl:absolute right-0">
              <Image
                src="/imgs/book.png"
                alt="Image"
                width={600}
                height={600}
              />
            </div>

            <div className="hidden md:block bg-white xl:relative px-6 py-3 rounded-3xl">
              <div className="py-3">
                <h3 className="font-semibold text-gray-900 text-3xl">
                  Mande sua mensagem!
                </h3>
              </div>

              <div className="py-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
                />
              </div>

              <div className="py-3">
                <input
                  type="text"
                  placeholder="Email"
                  className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
                />
              </div>

              <div className="py-3 relative">
                <textarea
                  placeholder="Virtual Meeting"
                  rows={4}
                  className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none resize-none"
                />

                <div className="absolute inset-y-0 left-80 ml-6 flex items-center text-xl text-gray-600">
                  <i data-feather="chevron-down"></i>
                </div>
              </div>

              <div className="py-3">
                <button className="w-full flex gap-4 justify-center items-center py-4 font-semibold text-lg text-white bg-primary rounded-xl hover:bg-highlight transition ease-in-out duration-500">
                  Enviar <MailOpen />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
