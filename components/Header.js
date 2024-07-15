'use client'

import React from 'react'
import { signIn, signOut } from 'next-auth/react'
import { Fish } from 'lucide-react'

const Header = ({session}) => {
  const firstName = session?.user.name.split(' ')[0]
  return (
    <div className='w-full h-20 flex justify-around py-10'>
        {/* <pre>
            {JSON.stringify(session)}
        </pre> */}
        <div>
            <span className='flex'>
                <Fish/>
                Seafood Select: By Appointment Only
            </span>
        </div>
        <div>
        {!session && <button
            type = "button"
            onClick = {() => signIn('github')}
        >
            Sign In
        </button>}

        {session && <div>
            <div>
                Hello {firstName}
            </div>
            <button
                type = "button"
                onClick = {() => signOut()}
            >
                SignOut
            </button>
        </div>}
        </div>
        
      
    </div>
  )
}

export default Header
