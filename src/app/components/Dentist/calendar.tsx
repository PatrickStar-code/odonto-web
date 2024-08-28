'use client'

import { CalendarClock } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function CalendarDentist() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [clickedDate, setClickedDate] = useState<Date | null>(new Date())
  const [days, setDays] = useState<(string | number)[]>([])
  const CacheData = new Date()

  useEffect(() => {
    const inicialDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1,
    )
    const finalDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
    )

    const calendarDays = []

    for (let i = 0; i < inicialDate.getDay(); i++) {
      calendarDays.push('')
    }

    for (let i = 1; i <= finalDate.getDate(); i++) {
      calendarDays.push(i)
    }

    setDays(calendarDays)
  }, [currentDate])

  const tableLineCount = days.length / 7

  const DaysOfMonth = []

  for (let i = 0; i < tableLineCount; i++) {
    DaysOfMonth.push(days.slice(i * 7, i * 7 + 7))
  }

  const DaysofWeek = [
    {
      day: 'Domingo',
      AbreavitedDay: 'Dom',
    },
    {
      day: 'Segunda',
      AbreavitedDay: 'Seg',
    },
    {
      day: 'Terça',
      AbreavitedDay: 'Ter',
    },
    {
      day: 'Quarta',
      AbreavitedDay: 'Qua',
    },
    {
      day: 'Quinta',
      AbreavitedDay: 'Qui',
    },
    {
      day: 'Sexta',
      AbreavitedDay: 'Sex',
    },
    {
      day: 'Sabado',
      AbreavitedDay: 'Sab',
    },
  ]

  function previousDate() {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1),
    )
  }

  function nextDate() {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1),
    )
  }

  function handleDateClick(date: Date) {
    if (date.getMonth() === currentDate.getMonth()) {
      setClickedDate(date)
    }
  }

  function resetCalendar() {
    setCurrentDate(CacheData)
    setClickedDate(CacheData)
  }

  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="bg-white rounded shadow w-full overflow-x-auto">
        <div className="header flex justify-between items-center border-b p-2">
          {currentDate.getDate() !== CacheData.getDate() &&
            currentDate.getMonth() !== CacheData.getMonth() && (
              <button
                className="px-2 py-2  md:px-4 rounded  bg-primary text-white font-bold"
                onClick={resetCalendar}
              >
                <CalendarClock />
              </button>
            )}
          <span className="text-lg text-wrap font-bold capitalize">
            {currentDate.toLocaleDateString('pt-BR', {
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <div className="buttons flex space-x-2">
            <button
              className="p-2 text-gray-600 hover:text-gray-800"
              onClick={previousDate}
            >
              <svg
                width="1em"
                fill="currentColor"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-left-circle"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fillRule="evenodd"
                  d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
                />
                <path
                  fillRule="evenodd"
                  d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
                />
              </svg>
            </button>
            <button
              className="p-2 text-gray-600 hover:text-gray-800"
              onClick={nextDate}
            >
              <svg
                width="1em"
                fill="currentColor"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-right-circle"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fillRule="evenodd"
                  d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
                />
                <path
                  fillRule="evenodd"
                  d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>
        </div>
        <table className="w-full text-sm md:text-base overflow-x-auto">
          <thead>
            <tr className="bg-gray-100 border-b">
              {DaysofWeek.map((day, index) => (
                <th
                  key={index}
                  className="p-2 border-r text-gray-600 font-medium"
                >
                  <span className="hidden md:inline">{day.day}</span>
                  <span className="md:hidden">{day.AbreavitedDay}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DaysOfMonth.map((week, weekIndex) => (
              <tr key={weekIndex} className="text-center">
                {week.map((day, dayIndex) => {
                  const dayDate = new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    Number(day),
                  )

                  const isCurrentDay =
                    CacheData.getDate() === day &&
                    CacheData.getMonth() === currentDate.getMonth() &&
                    CacheData.getFullYear() === currentDate.getFullYear()

                  const isClickedDay =
                    clickedDate?.getTime() === dayDate.getTime()

                  const dayClass = day === '' ? 'bg-gray-200' : 'cursor-pointer'

                  const combinedClass = isClickedDay
                    ? 'bg-secondary text-white'
                    : isCurrentDay
                      ? 'bg-primary text-white hover:bg-highlight'
                      : 'hover:bg-gray-300'

                  return (
                    <td
                      key={dayIndex}
                      className={`border p-2 ${dayClass} ${combinedClass}`}
                      onClick={() => handleDateClick(dayDate)}
                    >
                      {day}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
