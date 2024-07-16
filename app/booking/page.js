import BookingForm from '@/components/BookingForm'
import { Appointment } from '@/models/Appointment'
import mongoose from 'mongoose'
import React from 'react'

const Booking = async () => {
  return (
    <div className='mx-auto'>
        <BookingForm/>
    </div>
  )
}

export default Booking
