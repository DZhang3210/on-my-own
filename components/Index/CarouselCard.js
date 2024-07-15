import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const CarouselCard = ({rTitle, rDesc}) => {
  return (
    <div className='bg-emerald-500 h-full w-full flex flex-col justify-center items-center p-4 px-24'>
        <div className='flex flex-col bg-white/60 rounded-lg p-4'>
            <div className='flex items-center gap-2'>
                <Avatar>
                    <AvatarImage src="https://picsum.photos/200" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1>{rTitle}</h1>
            </div>
            <div className='pl-12'>
                {rDesc}
            </div>
        </div>
    </div>
  )
}

export default CarouselCard
