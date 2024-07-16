import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const CarouselCard = ({rTitle, rDesc}) => {
  return (
    <div className='rounded-lg h-full w-full flex flex-col justify-center items-center p-4 px-5'>
        <div className='flex flex-col bg-slate-400/20 rounded-lg p-4 h-full w-full justify-center items-center'>
            <div className='flex items-center gap-2'>
                <Avatar>
                    <AvatarImage src="https://picsum.photos/200" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1
                    className='font-bold text-lg '
                >
                    {rTitle}
                </h1>
            </div>
            <div className='pl-12 indent-2'>
                {rDesc}
            </div>
        </div>
    </div>
  )
}

export default CarouselCard
