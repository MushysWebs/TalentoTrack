'use client'
import React from 'react'
import LogInBtn from './LogInBtn'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const UserInfo = () => {
  const {status, data : session } = useSession();
  return status === 'authenticated' ? (
    <div className="flex flex-col items-center gap-4 shadow-md p-5">
      <Image 
        src={session.user.image}
        alt="User Image"
        width={40}
        height={40}
        className='w-10 h-10 rounded-full'
      /> 
      <span className='text-xl font-bold'>{session?.user?.name}</span>
      <span className='font-bold'>{session?.user?.email}</span>
    </div>
  ): (<LogInBtn />)
}

export default UserInfo
