import React from 'react'
import Image from 'next/image'

export default function TreatmentsCard({
  icon,
  name,
}: {
  icon: string
  name: string
}) {
  return (
    <article className="flex flex-col items-center justify-center w-48 p-4 hover:scale-125 ">
      <Image
        src={icon}
        alt=""
        width={100}
        height={100}
        quality={100}
        className="w-24 h-24"
      />
      <p className="text-center text-bold text-lg">{name}</p>
    </article>
  )
}
