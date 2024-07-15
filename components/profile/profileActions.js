'use server'

import { Appointment } from "@/models/Appointment"
import mongoose from "mongoose"

export const recieveData = async() => {
    const currentDate = new Date();
    await mongoose.connect(process.env.MONGODB_URI)
    const appointments = await Appointment.find({
        date: { $gt: currentDate },
        email: session?.user?.email
    })
    return appointments
}