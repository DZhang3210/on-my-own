'use server'
import { Appointment } from "@/models/Appointment";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

export const deleteAppointment = async(id) => {
    console.log('ID\n\n\n\n\n\n\n\n\n',id)
    await mongoose.connect(process.env.MONGODB_URI)
    await Appointment.findByIdAndDelete(id)
    revalidatePath('/profile')
    redirect('/profile')
    return('true')
}
