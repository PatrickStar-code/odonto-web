import React from 'react'

import Image from 'next/image'

export default function CardClient() {
  return (
    <div className="bg-white w-64 rounded-lg shadow-lg p-8 md:mx-4 flex flex-col">
      <Image
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="Profile picture"
        width={320}
        height={0}
        className="rounded-full  mb-4"
      />
    </div>
  )
}
