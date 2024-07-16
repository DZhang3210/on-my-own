import { PersonStanding, User } from 'lucide-react';
import React from 'react'

const AppointmentList = ({apps}) => {
  return (
    <>
    {apps.map((app) => {
        const { title, name, size, description, location, date, email } = app;
        return (
            <>
            <div key={name} className='bg-slate-400/50 rounded-lg p-4'>
                <div className='text-xl font-bold'>{title}</div>
                <div className='flex gap-2 text-sm font-semibold'>
                    <div className='indent-1 flex items-center'>
                        <span>{size}</span> <User size = {13} />
                    </div>
                    <div className='capitalize'>
                        {location}
                    </div>
                    <div>
                        {new Date(date).toLocaleDateString()}
                    </div>
                </div>
                <div className='mt-2 indent-3 text-lg'>
                    {description}
                </div>
            </div>
                <hr/>
            </>
        );
    })}
    </>
  )
}

export default AppointmentList
