import React from 'react';
import { useSession, signIn } from 'next-auth/react';
import Image from 'next/image';

const UserInfo = () => {
  const { status, data: session } = useSession();
  
  // Redirect user to the root page if authenticated
  if (status === 'authenticated') {
    // You can also use router for redirection
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
    return null; // Return null as you're redirecting
  }

  // Display login button if not authenticated
  return (
    <div className='border-solid bg-slate-100 p-11 rounded-xl '>
      <p>Welcome to TalentoTrack</p>
    <button className='flex items-center gap-4 shadow-xl rounded-lg pl-3' onClick={()=> signIn('google')}>
        <Image src="/google-logo.png" alt="Google icon" width={30} height={30} />
        <span className='bg-blue-500 text-white px-4 py-3'>Sign in with Google</span>
        </button>
    </div>
  );
};

export default UserInfo;
