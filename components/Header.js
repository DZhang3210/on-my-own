'use client'

import React, { useState } from 'react'
import { signIn, signOut } from 'next-auth/react'
import { Fish, LogIn, LogOut } from 'lucide-react'
import Link from 'next/link'
import { Avatar } from 'flowbite-react'

const Header = ({session}) => {
  const firstName = session?.user.name.split(' ')[0]
  const [dropDown, setDropdown] = useState(false)
  return (
    <div className='bg-ocean/40 w-full py-7 sticky top-0 z-[1000] shadow'>
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
                    {/* <Link
                        href = "/booking" 
                        className='profile-btn bg-black border-black text-white hover:bg-white hover:text-black hover:border text-center'>
                        Book Appointment
                    </Link> */}
                    <div className='relative flex items-center gap-2 w-40 justify-end'>
                        <button
                            href = "/profile"
                            onClick = {()=>setDropdown(dropdown => !dropdown)}
                        >
                            <Avatar img = {session.user.image} rounded
                            className={'rounded-full'+' '+(dropDown? 'border-2 border-green-400 box-border':'')}
                            />
                        </button>
                        {dropDown && <div className={'absolute top-full right-0 w-full bg-white flex flex-col items-end gap-1 rounded-lg border border-gray-400'}>
                            <div>Book Appointment</div>
                            <div>Profile</div>
                            <div>SignOut</div>
                        </div>}
                    </div>
                    {/* <button
                        type = "button"
                        className='profile-btn border-blue-300 bg-blue-300 hover:text-black hover:border hover:bg-white'
                        onClick = {() => signOut()}
                    >
                        <span className='inline md:hidden'><LogOut/></span>
                        <span className='hidden md:inline'>Sign Out</span>
                    </button> */}
                </div>
            }
            </div>
        </div>
        
      
    </div>
  )
}

export default Header
