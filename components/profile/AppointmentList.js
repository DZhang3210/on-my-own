'use client'
import { PersonStanding, User } from 'lucide-react';
import React from 'react'
import { deleteAppointment } from './DeleteAppointmentActions';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

const getRelativeTimeMessage = (date) => {
    const currentDate = new Date();
    const appointmentDate = new Date(date);
    const timeDifference = appointmentDate - currentDate; // time difference in milliseconds

    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
    const daysDifference = Math.floor(timeDifference / oneDay);

    if (daysDifference === 0) {
      return <div className='bg-green-500'>Today</div>;
    } else if (daysDifference > 0) {
      return <div className='bg-blue-300'>{`In ${daysDifference} day${daysDifference > 1 ? 's' : ''}`}</div>;
    } else {
      return <div className='bg-yellow-200'>{`${Math.abs(daysDifference)} day${Math.abs(daysDifference) > 1 ? 's' : ''} ago`}</div>;
}
}

const AppointmentList = ({apps, current = true}) => {
  return (
    <>
    {apps.map((app) => {
        const {_id, title, name, size, description, location, date, email } = app;
        return (
            <div key={_id}>
            <div className='rounded-lg p-4 flex flex-col gap-2'>
                <div className='text-xl font-bold'>{title}</div>
                <div className='flex gap-1 text-sm font-semibold *:rounded-full  *:px-2 *:py-0'>
                    <div className='indent-1 flex items-center bg-gray-300'>
                        <span>{size}</span> <User size = {13} />
                    </div>
                    <div className='capitalize bg-gray-300'>
                        {location}
                    </div>
                    <div className='rounded-lg bg-slate-300'>
                        {new Date(date).toLocaleDateString()}
                    </div>
                    {getRelativeTimeMessage(date)}
                </div>
                <div className='mt-2 indent-3 text-lg  border-l-2 border-gray-600'>
                    {description}
                </div>
                {current && <div className='flex justify-end'>
                    <AlertDialog>
                        <AlertDialogTrigger className='rounded-lg bg-black text-white px-2 py-1 hover:bg-red-300  hover:text-black transition'>Cancel Event</AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete this appointment
                            </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <button
                                type = "button"
                                className=' rounded-md bg-red-200 px-1 py-1 transition hover:bg-red-400 hover:scale-105'
                                onClick = {async ()=>{
                                    try{
                                        await deleteAppointment(_id)
                                        console.log('delete successful')
                                    }catch(err){
                                        console.log(err)
                                    }
                                }}
                            >
                                Cancel Event
                            </button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                    </div>}
                </div>
                <hr/>
            </div>
        );
    })}
    </>
  )
}

export default AppointmentList
