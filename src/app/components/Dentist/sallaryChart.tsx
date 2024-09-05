'use client'

import React from 'react'
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

const salaryData = {
  series: [
    {
      name: 'Salario do mês',
      data: [
        5000, 5200, 4800, 5500, 6000, 5900, 6200, 6100, 6000, 6300, 6200, 6500,
      ],
    },
  ],
  options: {
    chart: {
      type: 'bar' as const,
      height: '100%',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
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
        text: 'Salario (em Real)',
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
  } as ApexOptions,
}

export default function MonthlySalaryBarChart() {
  return (
    <div className="mx-auto bg-white rounded-lg shadow-2xl p-4 m-4 w-full max-w-4xl">
      <h1 className="text-center text-xl font-bold mb-4">Salario Mensal</h1>
      <div className="w-full h-full flex items-center justify-center">
        <Chart
          options={salaryData.options}
          series={salaryData.series}
          type="bar"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}
