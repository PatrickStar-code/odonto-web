'use client'

import React from 'react'
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

const appointmentsData = {
  series: [
    {
      name: 'Numero de Consultas',
      data: [30, 45, 28, 50, 60, 40, 70, 65, 55, 80, 75, 90], // Exemplo de dados
    },
  ],
  options: {
    chart: {
      type: 'line', // Certifique-se de que o tipo é uma string válida
      height: '100%',
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'top',
    },
    xaxis: {
      categories: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro ',
        'Dezembro',
      ],
      title: {
        text: 'Mês',
      },
    },
    yaxis: {
      title: {
        text: 'Numero de Consultas',
      },
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          chart: {
            height: 300,
          },
        },
      },
    ],
  } as ApexOptions, // Assegure-se de que `options` é do tipo `ApexOptions`
}

export default function AppointmentsLineChart() {
  return (
    <div className="mx-auto bg-white rounded-lg shadow-2xl p-4 m-4 w-full max-w-4xl">
      <h1 className="text-center text-xl font-bold mb-4">
        Número de Consultas
      </h1>
      <div className="w-full h-full flex items-center justify-center">
        <Chart
          options={appointmentsData.options}
          series={appointmentsData.series}
          type="line"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}
