import { PersonStanding } from 'lucide-react';
import Image from 'next/image'
import React from 'react'
import AppointmentList from './AppointmentList';

const ProfilePage = ({session, apps}) => {
  return (
    <div className='max-w-4xl mx-auto flex justify-between mt-10'>
        <div className='grow flex flex-col gap-1'>
            <Image src = {session?.user.image} alt = "profile-image" height = {100} width = {100} className='rounded-lg'/>
            <div className='text-lg'>
                {session?.user?.name}
            </div>
            <div className='text-gray-400'>
                /{session?.user?.email}
            </div>
        </div>
        <div className='grow flex flex-col gap-2'>
            <div className='font-semibold text-2xl'>
                Your Sessions
            </div>
            <hr/>
            <AppointmentList apps = {apps}/>
            
            <button className='rounded-full px-2 py-1 bg-slate-200 font-semibold'>
                All Sessions
            </button>
        </div>
    </div>
  )
}

export default ProfilePage
