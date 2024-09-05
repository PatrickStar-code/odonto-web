import React from 'react'

export default function TreatmentsInfoCard() {
  return (
    <div className="relative w-64 h-60 overflow-hidden rounded-lg shadow-lg">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url(https://via.placeholder.com/400)' }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-xl font-semibold">Texto do Card</p>
        </div>
      </div>
    </div>
  )
}
