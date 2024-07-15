'use server'

import { Appointment } from "@/models/Appointment"
import mongoose from "mongoose"
import { redirect } from "next/navigation"


export const saveAppointment = async (formData) => {
    const data = Object.fromEntries(formData)
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        const newAppointment = await new Appointment(data)
        const response = await newAppointment.save()
    }
    catch(err){
        console.log('SOMETHING WENT WRONG',err)
        return("false")
    }
    redirect('/')
    return("true")
  }