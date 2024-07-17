import { PersonStanding } from 'lucide-react';
import Image from 'next/image'
import React from 'react'
import AppointmentList from './AppointmentList';
import DisplayRemainingSessions from './DisplayRemainingSessions';

const ProfilePage = ({session, apps}) => {
  return (
    <div className='relative w-full'>
        <div className="absolute left-0 top-0 h-full w-[5rem] bg-red-400/20 z-[-1]"/>
        <div className='max-w-4xl mx-auto flex flex-col md:flex-row justify-between py-10'>
            <div className='grow flex flex-col gap-1 px-6'>
                <Image src = {session?.user.image} alt = "profile-image" height = {200} width = {200} className='rounded-full'/>
                <div className='text-lg'>
                    {session?.user?.name}
                </div>
                <div className='text-gray-400'>
                    /{session?.user?.email}
                </div>
            </div>
            <div className='grow flex flex-col gap-2 px-6'>
                <div className='font-semibold text-2xl'>
                    Your Sessions
                </div>
                <hr/>
                <AppointmentList apps = {apps}/>
                <DisplayRemainingSessions email = {session?.user?.email}/>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage
