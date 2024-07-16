'use client'
import React, { useEffect, useState } from 'react'
import AppointmentList from './AppointmentList'
import { findRemainingAppointments } from './findRemainingAppointmentsAction'
import { Loader } from 'lucide-react'

const DisplayRemainingessions = ({email}) => {
  const [show, setShow] = useState(false)
  const [app, setApps] = useState([])
  const [loading, setLoading] = useState(false)
  const handleButton = async () =>{
    const result = await findRemainingAppointments(email)
    console.log(result)
    setApps(result)
    setShow(true)
    }

  return (
    <div>
        {(!show) ? <button 
            className='rounded-full px-2 py-1 bg-slate-200 font-semibold flex justify-center'
            onClick={()=>{
                handleButton()
                setLoading(true)
            }}
        >
            
            {!loading ? 'All Sessions' : <Loader className='animate-spin'/>}
        </button>
        :
        <AppointmentList apps = {app} current = {false}/>
        }
    </div>
  )
}

export default DisplayRemainingessions
