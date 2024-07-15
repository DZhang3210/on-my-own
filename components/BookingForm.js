'use client'
import React, { useState } from 'react'
import { Calendar } from './ui/calendar'
import TimePicker from 'react-time-picker';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const BookingForm = () => {
  const [date, setDate] = useState(new Date())
  const [value, onChange] = useState('10:00');
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
        <label>
            <div className='font-semibold'>Size:</div>
            <input type = "Number" name = "size"/> 
        </label>
        <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
            </div>
        </RadioGroup>
      </div>
      <div className='flex flex-col gap-3'>
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
        />
        {/* <div>
            <TimePicker onChange={onChange} value={value} clearIcon = "" clockIcon=""/>
        </div> */}
      </div>
      
    </form>
  )
}

export default BookingForm
