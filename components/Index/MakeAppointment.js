import React from 'react'
import { AnimatedPinDemo } from '../AnimatedPin'

const MakeAppointment = () => {
  return (
    <div className='flex justify-center my-10 mx-5'> 
      <div className='flex flex-col text-center gap-2 justify-center items-center max-w-sm'>
        <h1
            className='text-2xl font-semibold capitalize'
        >
            Your new event is one click away
        </h1>
        <p>
            At Seafood Select we know life can get hectic which is why we're only open
        </p>
      </div>
      <AnimatedPinDemo/>
    </div>
  )
}

export default MakeAppointment
