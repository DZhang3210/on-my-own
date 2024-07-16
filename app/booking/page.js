import BookingButton from '@/components/booking/BookingButton'
import BookingForm from '@/components/booking/BookingForm'
import { Appointment } from '@/models/Appointment'
import mongoose from 'mongoose'
import React from 'react'

const Booking = async () => {
  return (
    <div className='mx-auto'>
        <BookingForm/>
        {/* <BookingButton/> */}
    </div>
  )
}

export default Booking
