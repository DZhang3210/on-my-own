'use server'
import { Appointment } from "@/models/Appointment";
import mongoose from "mongoose";

export const findRemainingAppointments = async (email) => {
    await mongoose.connect(process.env.MONGODB_URI)
    const currentDate = new Date();

    const remainingAppointments = await Appointment.find({
      date: { $lt: currentDate },
      email: email,
    });
    return remainingAppointments
}