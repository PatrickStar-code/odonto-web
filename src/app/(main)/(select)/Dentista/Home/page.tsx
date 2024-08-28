import CardDashboard from '@/app/components/Dentist/cardDashboard'
import { TableComponent } from '@/app/components/Dentist/tableDentist'
import AppointmentsLineChart from '@/app/components/Dentist/lineChart'
import MonthlySalaryBarChart from '@/app/components/Dentist/sallaryChart'

export default function HomeDentist() {
  return (
    <main className="">
      <div className="grid grid-cols-1 md:grid-cols-[repeat(2,24rem)] lg:grid-cols-[repeat(4,24rem)] mt-8 md:mt-0 justify-center  items-center gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <CardDashboard key={index} />
        ))}
      </div>
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-4">
        <AppointmentsLineChart />
        <MonthlySalaryBarChart />
      </div>
      <section className="flex flex-col md:flex-row  items-center">
        <TableComponent />
      </section>
    </main>
  )
}
