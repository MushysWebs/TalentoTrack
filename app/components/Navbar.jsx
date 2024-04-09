'use client'
import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const Navbar = () => {
  const { status } = useSession()
  return (
    <div className='p-4 flex justify-between items-center shadow-md'>
        <Link href="/" className='font-bold text-lg text-blue-700 px-5'>
           Home
        </Link>
        {
          status === 'authenticated' ? (
            <button className='bg-slate-600 text-yellow-50 px-6 py-q rounded-lg' onClick={()=> signOut()}>Log Out</button>
          ) : (
            <button className='bg-slate-600 text-yellow-50 px-6 py-q rounded-lg' onClick={()=> signIn('google')}>Log In</button>
          
          )
        }
      

    </div>
  )
}

export default Navbar