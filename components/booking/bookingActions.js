'use server'

import { Appointment } from "@/models/Appointment"
import mongoose from "mongoose"

export const saveAppointment = async (formData) => {
    const data = Object.fromEntries(formData)
    try{
        await mongoose.connect(process.env.MONGO_URI)
        const response = await Appointment.save(formData)
        console.log(response)
    }
    catch(err){
        console.log('SOMETHING WENT WRONG',err)
    }
  }