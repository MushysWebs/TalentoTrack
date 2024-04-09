'use client'
import React from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import Google from 'next-auth/providers/google'


const LogInBtn = () => {
  return (
    <button className='flex items-center gap-4 shadow-xl rounded-lg pl-3' onClick={()=> signIn('google')}>
        <Image src="/google-logo.png" alt="Google icon" width={30} height={30} />
        <span className='bg-blue-500 text-white px-4 py-3'>Sign in with Google</span>
        </button>
  )
}

export default LogInBtn