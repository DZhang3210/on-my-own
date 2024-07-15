import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='w-full h-[90vh] relative flex justify-center text-center'>
        <div className='z-10 mt-32 flex flex-col gap-3'>
            <span className='text-5xl'>Seafood Select</span> 
            <span className='text-3xl'>Your next Stravaganza</span>
            <p>We do delivery and appointments only</p>
            <button className=' rounded-full bg-black text-white p-4 mt-6'>
                Book your next appointment now
            </button>
        </div>

      <Image src = {'/mesh-gradient.png'} alt= "hero-mesh" height = {0} width = {0} className='absolute top-0 left-0 w-full h-full z-[-1]'/>
    </section>
  )
}

export default Hero
