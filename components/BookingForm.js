'use client'
import React, { useState } from 'react'
import { Calendar } from './ui/calendar'
import { Datepicker } from "flowbite-react";

const BookingForm = () => {
  const [date, setDate] = useState(new Date())
  return (
    <form className='flex justify-around'>
      <div>
        <label>
            <div className='font-semibold'>Name:</div>
            <input type = "text" name = "name"/>
        </label>
        <label>
            <div className='font-semibold'>Size:</div>
            <input type = "text" name = "email"/> 
        </label>
        <label>
            <div className='font-semibold'>Title:</div>
            <input type = "text" name = "title"/> 
        </label>
      </div>
      <div className='flex flex-col gap-3'>
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
        />
        <Datepicker title="Appointment Date"/>
      </div>
      
    </form>
  )
}

export default BookingForm
