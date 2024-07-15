import { authOptions } from '@/lib/authOptions'
import { Appointment } from '@/models/Appointment'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'

const ProfilePage = async () => {
    const session = await getServerSession(authOptions)
    if (!session) {console.log("Couldn't find Session")}
    const currentDate = new Date();
    await mongoose.connect(process.env.MONGODB_URI)
    const appointments = await Appointment.find({
    date: { $gt: currentDate },
    email: session?.user?.email
    })
    // console.log(session)

    return (
    <ProfilePage/>
  )
}

export default ProfilePage
