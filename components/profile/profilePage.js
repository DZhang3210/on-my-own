import React from 'react'

const profilePage = () => {
  return (
    <div className='max-w-4xl mx-auto flex justify-between'>
        <div className='grow flex flex-col gap-1'>
            <Image src = {session?.user.image} alt = "profile-image" height = {100} width = {100} className='rounded-lg'/>
            <div className='text-lg'>
                {session?.user?.name}
            </div>
            <div className='text-gray-400'>
                /{session?.user?.email}
            </div>
        </div>
        <div className='grow flex flex-col gap-2'>
            <div className='font-semibold'>
                Your Sessions
            </div>
            <hr/>
                
            <hr/>
            <button className='rounded-full px-2 py-1 bg-slate-200 font-semibold'>
                All Sessions
            </button>
        </div>
    </div>
  )
}

export default profilePage
