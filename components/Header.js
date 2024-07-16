'use client'

import React from 'react'
import { signIn, signOut } from 'next-auth/react'
import { Fish, LogIn, LogOut } from 'lucide-react'
import Link from 'next/link'
import { Avatar } from 'flowbite-react'

const Header = ({session}) => {
  const firstName = session?.user.name.split(' ')[0]
  return (
    <div className='bg-white w-full py-7 sticky top-0 z-[1000] shadow'>
        <div className='max-w-4xl px-auto flex justify-between mx-auto items-center'>
            {/* <pre>
                {JSON.stringify(session)}
            </pre> */}
            <div className=''>
                <Link
                    href = "/" 
                    className='flex text-2xl items-center gap-1 font-semibold'
                    >
                    <Fish size = {40}/>
                    Seafood Select
                    <span className='hidden md:inline-block font-normal italic'>: By Appointment Only</span>
                </Link>
            </div>
            <div>
            {!session && <button
                type = "button"
                className='profile-btn border-blue-300 bg-blue-300 hover:text-black hover:border hover:bg-white'
                onClick = {() => signIn('github')}
            >
                <span className='inline md:hidden'><LogIn/></span>
                <span className='hidden md:inline'>Sign In</span>
            </button>}

            {session && 
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <Link
                            href = "/profile"
                        >
                            <Avatar img = {session.user.image} rounded/>
                        </Link>
                    </div>
                    <Link
                        href = "/booking" 
                        className='profile-btn bg-black border-black text-white hover:bg-white hover:text-black hover:border text-center'>
                        Book Appointment
                    </Link>
                    <button
                        type = "button"
                        className='profile-btn border-blue-300 bg-blue-300 hover:text-black hover:border hover:bg-white'
                        onClick = {() => signOut()}
                    >
                        <span className='inline md:hidden'><LogOut/></span>
                        <span className='hidden md:inline'>Sign Out</span>
                    </button>
                </div>
            }
            </div>
        </div>
        
      
    </div>
  )
}

export default Header
