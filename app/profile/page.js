import ProfilePage from '@/components/profile/profilePage'
import { authOptions } from '@/lib/authOptions'
import { Appointment } from '@/models/Appointment'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const Profile = async () => {
    const session = await getServerSession(authOptions)
    if (!session) {
        console.log("Couldn't find Session")
        redirect('/')
    }
    const currentDate = new Date();
    await mongoose.connect(process.env.MONGODB_URI)
    const appointments = await Appointment.find({
    date: { $gt: currentDate },
    email: session?.user?.email
    })
    console.log(appointments)

    return (
    <ProfilePage session = {session} apps = {appointments}/>
  )
}

export default Profile
