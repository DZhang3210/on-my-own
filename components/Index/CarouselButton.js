import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import React from 'react'

const CarouselButton = ({side}) => {
  const symbol = side === "left" ? <ArrowBigLeft/> : <ArrowBigRight/>
  return (
    <div className='rounded-full border-2 p-2 border-blue-400 hover:bg-blue-300 transition'>
       {symbol}
    </div>
  )
}

export default CarouselButton
