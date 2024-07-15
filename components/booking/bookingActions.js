'use server'

import { Appointment } from "@/models/Appointment"
import mongoose from "mongoose"

export const saveAppointment = async (formData) => {
    const data = Object.fromEntries(formData)
    try{
        console.log(data)
        await mongoose.connect(process.env.MONGODB_URI)
        const newAppointment = await new Appointment(data)
        console.log("HEEDANJKIFADJKNOMJNASOFONMKFAINFKOINOFASNIFAONIFA")
        console.log(newAppointment)
        const response = await newAppointment.save()
        console.log(response)
    }
    catch(err){
        console.log('SOMETHING WENT WRONG',err)
    }
  }