import React from 'react'

export default function EvidenceCard({icon,label,count}) {
  return (
    <div className='bg-primaryBlueColor w-auto min-w-32 max-w-48 md:min-w-48 rounded p-2 flex flex-col items-center text-primaryWhiteColor gap-3'>
        <h1 className='font-semibold text-2xl'>{count}</h1>
        <div className='text-primaryWhiteColor flex items-center gap-2'>
        <span>{icon}</span>
        <p className='text-sm md:text-md'>{label}</p>
        </div>
    </div>
  )
}
