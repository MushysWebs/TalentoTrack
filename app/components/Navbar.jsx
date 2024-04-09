import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const Navbar = () => {
  const { status, data: session } = useSession();

  const handleSignIn = () => {
    signIn('google');
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className='p-4 flex justify-between items-center shadow-md'>
      <div className="flex items-center"> 
        {status === 'authenticated' ? (
          <React.Fragment>
            <span className='text-blue-700 px-5'>{session.user.name}</span>
            <button className='bg-slate-600 text-yellow-50 px-6 py-1 rounded-lg' onClick={handleSignOut}>Log Out</button>
          </React.Fragment>
        ) : (
          <button></button>
        )}
      </div>
      {/* Empty div for spacing */}
      <div></div>
    </div>
  );
};

export default Navbar;
