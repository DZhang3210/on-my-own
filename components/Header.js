'use client'

import React from 'react'
import { signIn, signOut } from 'next-auth/react'
import { Fish } from 'lucide-react'
import Link from 'next/link'
import { Avatar } from 'flowbite-react'

const Header = ({session}) => {
  const firstName = session?.user.name.split(' ')[0]
  return (
    <div className='bg-white w-full py-7 sticky top-0 z-[1000]'>
        <div className='max-w-4xl px-auto flex justify-between mx-auto items-center'>
            {/* <pre>
                {JSON.stringify(session)}
            </pre> */}
            <div className=''>
                <Link
                    href = "/" 
                    className='flex text-xl items-center gap-1'
                    >
                    <Fish size = {40}/>
                    Seafood Select: By Appointment Only
                </Link>
            </div>
            <div>
            {!session && <button
                type = "button"
                className='profile-btn'
                onClick = {() => signIn('github')}
            >
                Sign In
            </button>}

            {session && 
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <span className='text-lg font-semibold'>Hello {firstName}</span>
                        <Link
                            href = "/profile"
                        >
                            <Avatar img = {session.user.image} rounded/>
                        </Link>
                    </div>
                    <button
                        type = "button"
                        className='profile-btn'
                        onClick = {() => signOut()}
                    >
                        SignOut
                    </button>
                </div>
            }
            </div>
        </div>
        
      
    </div>
  )
}

export default Header
