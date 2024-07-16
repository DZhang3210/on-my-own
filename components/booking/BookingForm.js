'use client'
import React, { useInsertionEffect, useRef, useState } from 'react'
import { Calendar } from '../ui/calendar'
import TimePicker from 'react-time-picker';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { saveAppointment } from './bookingActions';
import { useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const BookingForm = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const buttonRef = useRef()
  const router = useRouter()
  const handleFormSubmit = async (formData) => {
    // formData.preventDefault()
    console.log(Object.fromEntries(formData))
  }
  return (
    <form 
        action = {(formData)=> {
          console.log("THIS IS WORKING")
          saveAppointment(formData)
          setOpen(false)
        }}
        className='flex flex-col justify-center items-center gap-3 mb-10'
    >
      <div className='flex flex-col justify-center items-center gap-3 mt-10 rounded-md bg-slate-200/50 p-10'>
        <div className='w-full text-2xl font-semibold'>
          Make your Appointment
        </div>
        <div className='flex flex-col sm:flex-row justify-around gap-20 mt-4'>
          <div className='flex flex-col gap-3'>
              <label>
                  <div className='font-semibold'>Title:</div>
                  <input type = "text" name = "title" placeholder='your incredible title...' className='rounded-md w-full' required/> 
              </label>
              <label>
                  <div className='font-semibold'>Name:</div>
                  <input type = "text" name = "name" placeholder='John Doe' className='rounded-md w-full' required/>
              </label>
              <label>
                  <div className='font-semibold'>Size:</div>
                  <input type = "number" name = "size" placeholder='Size...' className='rounded-md w-full' required/> 
              </label>
              <label>
                  <div className='font-semibold'>Description:</div>
                  <textarea type = "text" name = "description" className='w-full rounded-md' required/> 
              </label>
              <div className='mb-4'>
                  <div className='font-semibold'>
                      Which Locations?
                  </div>
                  <Select name = "location">
                    <SelectTrigger className="w-full h-12 border border-gray-500">
                      <SelectValue placeholder="Seaside Harbor, Maine"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maine">Seaside Harbor, Maine</SelectItem>
                      <SelectItem value="cali">Fisherman's Wharf, San Francisco, California</SelectItem>
                      <SelectItem value="florida">Key West, Florida</SelectItem>
                    </SelectContent>
                  </Select>

              </div>
          </div>
          <div className='flex flex-col gap-5'>
              <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border-2 border-black"
              />
              
          </div>
        </div>
      <div className='flex flex-row justify-end w-full gap-2'>
        <button
          className='inline-block rounded-lg px-2 py-2 border font-semibold text-sm bg-white  transition hover:scale-105'
          type = "button"
          onClick = {()=> {
            router.push('/')
          }}
        >
          Cancel
        </button> 
        <button
          className='inline-block rounded-lg px-2 py-2 border font-semibold text-sm bg-black text-white transition hover:scale-105'
          type = "submit"
        >
          Confirm
        </button>
      </div>
      </div>
     
      <input className='hidden' name = "date" value = {date} readOnly/>
      <input className='hidden' name = "email" value = {"davidzhang3210@gmail.com"} readOnly/>
    </form>
  )
}

export default BookingForm
