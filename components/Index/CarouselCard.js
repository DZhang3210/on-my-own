import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'

const CarouselCard = ({rTitle, rDesc, rImage}) => {
  return (
    <div className='relative rounded-lg h-full w-full flex flex-col justify-center items-center p-4 px-5 border-2 border-red-400'>
        <div className='flex flex-col bg-slate-400/20 rounded-lg p-4 h-full w-full justify-center items-center gap-3'>
            <div className='flex items-center gap-2'>
                <Avatar>
                    <AvatarImage src="https://picsum.photos/200" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1
                    className='font-bold text-2xl '
                >
                    {rTitle}
                </h1>
            </div>
            <div className='pl-12 text-lg indent-2 text-center'>
                {rDesc}
            </div>
        </div>
        <Image 
            src = {rImage} 
            alt= "hero-mesh" 
            layout='fill'
            height = {0} 
            width = {0} 
            className='absolute top-0 left-0 w-full h-full opacity-10'
        />

    </div>
  )
}

export default CarouselCard
