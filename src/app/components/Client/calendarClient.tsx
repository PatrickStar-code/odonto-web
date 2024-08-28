'use client'

import { ArrowLeft, ArrowRight, CalendarClock } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function CalendarClient() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [days, setDays] = useState<(string | number)[]>([])

  // Salvando Dados anteriores
  const CacheDate = new Date()
  const ActualDay = CacheDate.getDay()

  useEffect(() => {
    generateCalendar(currentDate)
  }, [currentDate])

  const generateCalendar = (date: Date) => {
    const startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    const daysInMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0,
    ).getDate()

    const calendarDays = []

    for (let i = 0; i < startDay; i++) {
      calendarDays.push('')
    }

    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(i)
    }

    setDays(calendarDays)
  }

  const Reset = () => {
    setCurrentDate(CacheDate)
  }

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    )
  }

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    )
  }

  return (
    <div className="flex flex-col bg-gray-100">
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between mb-4">
          <button
            onClick={previousMonth}
            className="px-4 py-2  rounded bg-primary text-white font-bold"
          >
            <ArrowLeft />
          </button>
          <h2 className="text-xl font-bold">
            {currentDate.toLocaleDateString('default', {
              month: 'long',
              year: 'numeric',
            })}
          </h2>
          <button
            onClick={nextMonth}
            className="px-4 py-2  rounded  bg-primary text-white font-bold"
          >
            <ArrowRight />
          </button>
        </div>
        {currentDate.getDate() !== CacheDate.getDate() && (
          <button
            className="px-4 py-2  rounded  bg-primary text-white font-bold"
            onClick={Reset}
          >
            <CalendarClock />
          </button>
        )}

        <div className="grid grid-cols-7 gap-2 text-center">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(
            (day, index) => (
              <div key={index} className="font-bold">
                {day}
              </div>
            ),
          )}
          {days.map((day, index) => (
            <div
              key={index}
              className={`py-2 ${day ? 'bg-gray-100 text-gray-900' : 'bg-gray-50 text-gray-300'} ${day === ActualDay && currentDate.getDate() === CacheDate.getDate() ? 'bg-primary text-white' : ''}`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-lg"> </div>
    </div>
  )
}
