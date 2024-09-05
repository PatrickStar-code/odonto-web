'use client'
import {
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalHeader,
} from 'keep-react'
import { Calendar } from 'phosphor-react'
import CalendarClient from './calendarClient'

export function ModalScheduling() {
  return (
    <ModalContent className="relative l rounded-3xl  bg-gray-100 shadow-md">
      <ModalClose className="absolute right-4 top-4 z-10" />
      <ModalHeader className="mb-6 space-y-3">
        <div className="bg-gray-100 rounded-full flex flex-col items-center justify-center">
          <Calendar size={40} />
          <p className="text-2xl">Agendamento</p>
        </div>
        <div className="space-y-1">
          <ModalDescription>
            <form action="" className="flex flex-col gap-6">
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="options"
                  className="text-sm font-medium text-gray-700"
                >
                  Choose an option
                </label>
                <select
                  id="options"
                  name="options"
                  className="block w-full mt-1 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Select an option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <CalendarClient />
            </form>
          </ModalDescription>
        </div>
      </ModalHeader>
    </ModalContent>
  )
}
