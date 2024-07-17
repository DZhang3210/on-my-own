import React from 'react'
import { AnimatedPinDemo } from '../AnimatedPin'

const MakeAppointment = () => {
  return (
    <div className='flex flex-col md:flex-row gap-3 justify-center items-center py-20 px-5 relative'> 
      <div className="absolute left-0 top-0 h-full w-[5rem] bg-red-400/20 z-[-1]"/>

      <div className='flex flex-col text-center gap-2 justify-center items-center max-w-sm border-2 border-red-300 bg-red-200/70 rounded-3xl h-[20rem] px-4'>
        <h1
            className='text-2xl font-semibold capitalize'
        >
            Your new event is one click away
        </h1>
        <p className='mt-4 px-5'>
            At Seafood Select we know life can get hectic which is why we're only open
        </p>
      </div>
      <AnimatedPinDemo/>
    </div>
  )
}

export default MakeAppointment
