'use client'
import React, { useState } from 'react'
import { Calendar } from './ui/calendar'
import TimePicker from 'react-time-picker';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { saveAppointment } from './booking/bookingActions';

const BookingForm = () => {
  const [date, setDate] = useState(new Date())
  const handleFormSubmit = async (formData) => {
    // formData.preventDefault()
    console.log(Object.fromEntries(formData))
  }
  return (
    <form 
        action = {(formData)=> saveAppointment(formData)}
        className='flex flex-col justify-center items-center gap-3 mt-10'
    >
      <div className='flex flex-col sm:flex-row justify-around gap-10'>
        <div className='flex flex-col gap-3'>
            <label>
                <div className='font-semibold'>Title:</div>
                <input type = "text" name = "title" placeholder='your incredible title...' required/> 
            </label>
            <label>
                <div className='font-semibold'>Name:</div>
                <input type = "text" name = "name" placeholder='John Doe' required/>
            </label>
            <label>
                <div className='font-semibold'>Size:</div>
                <input type = "number" name = "size" placeholder='Size...' required/> 
            </label>
            <label>
                <div className='font-semibold'>Description:</div>
                <textarea type = "text" name = "description" required/> 
            </label>
            
        </div>
        <div className='flex flex-col gap-5'>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
            <div className='mb-4'>
                <div>
                    Which Locations?
                </div>
                <RadioGroup defaultValue="maine" name = "location">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="maine" id="option-one" />
                        <Label htmlFor="option-one">Seaside Harbor, Maine</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cali" id="option-two" />
                        <Label htmlFor="option-two">Fisherman's Wharf, San Francisco, California</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="florida" id="option-three" />
                        <Label htmlFor="option-three">Key West, Florida</Label>
                    </div>
                </RadioGroup>
            </div>
        </div>
      </div>
      <button
        className='inline-block rounded-lg bg-blue-400 px-20 py-2 transition hover:scale-105'
      >
        Submit
      </button>
      <input className='hidden' name = "date" value = {date} readOnly/>
      <input className='hidden' name = "email" value = {"davidzhang3210@gmail.com"} readOnly/>
    </form>
  )
}

export default BookingForm
