'use client'

import React, { useState } from 'react'
import { signIn, signOut } from 'next-auth/react'
import { Fish, LogIn, LogOut } from 'lucide-react'
import Link from 'next/link'
import { Avatar } from 'flowbite-react'
import Image from 'next/image'

const Header = ({session}) => {
  const firstName = session?.user.name.split(' ')[0]
  const [dropDown, setDropdown] = useState(false)
  return (
    <div className='bg-ocean/40 w-full py-7 sticky top-0 z-[1000] shadow px-5'>
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
                    <div className='relative flex items-center gap-2 h-[5rem] justify-end'>
                        <button
                            href = "/profile"
                            onClick = {()=>setDropdown(dropdown => !dropdown)}
                            className='flex items-center gap-2'
                        >
                            <div className='text-xl whitespace-nowrap'>
                                <span className='hidden md:inline-block'>Welcome</span>
                                &nbsp; 
                                <span className='italic'>{session?.user?.name}</span>
                            </div>
                                <Image
                                    src = {session.user.image} 
                                    alt = "avatar"
                                    height = {40}
                                    width = {40}
                                    className={'rounded-full'+' '+(dropDown? 'border-2 border-green-400 box-border':'')}
                                />
                        </button>
                        {dropDown && <div className={'absolute top-full right-0 w-full bg-white flex flex-col items-end gap-2 rounded-lg border border-gray-400 p-4 text-end'}>
                            <Link href = "/booking" className='hover:underline'>Book Appointment</Link>
                            <hr className='w-full'/>
                            <Link href = "/profile" className='hover:underline'>Profile</Link>
                            <hr className='w-full'/>
                            <button onClick = {signOut} className='hover:underline'>SignOut</button>
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
