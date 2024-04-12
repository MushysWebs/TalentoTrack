import React, { useEffect, useState } from 'react';
import Layout from "../app/layoutAdmin";
import { getSession } from 'next-auth/react';

const Admin = () => {
  // Define state to hold the user session information
  const [session, setSession] = useState(null);

  // Fetch the user session when the component mounts
  useEffect(() => {
    // Define an asynchronous function to fetch the user session
    const fetchData = async () => {
      // Call the getSession function to get the user session
      const userSession = await getSession();
      // Set the user session in the component state
      setSession(userSession);
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  // If the user session is not available, render a message prompting the user to log in
  if (!session) {
    return (
      // Render the layout component and center the message vertically and horizontally on the screen
      <Layout>
        <div className="flex items-center justify-center h-screen">
        <div className="border-solid bg-gray-300 p-5 rounded-xl text-center shadow-lg'">
            {/* Display the message to prompt the user to log in */}
            <p className="text-lg font-semibold mb-2">You currently don't have access to this page, Please log in to gain access.</p>
          </div>
        </div>
      </Layout>
    );
  }

  // Approved emails that can access the admin page
  const approvedEmails = [""];

  // Check if the user's email is in the list of approved emails
  if (!approvedEmails.includes(session.user.email)) {
    // If not approved, render access denied message
    return (
      <Layout>
        <div className="flex items-center justify-center h-screen">
          <div className="border-solid bg-gray-300 p-5 rounded-xl text-center shadow-lg">
            <p className="text-lg font-semibold mb-2 text-red-500 ">You don't have sufficent permission please contact your administrator to acess this page.</p>
          </div>
        </div>
      </Layout>
    );
  }


  // If the user session is available, render the main content of the admin page
  return (
    <Layout>
      <main className="flex flex-col justify-between p-24 min-h-screen">
        <section className="flex-1">
          <h1 className="text-xl font-bold text-center">Welcome to MovieHub!</h1>
          <p className="text-center">Hubba bubba baby here we go!</p>
          <p className="text-center">This website was created to manage the database of a movie company.</p>
        </section>

        <img src="Mohammad.png" alt="Movie Hub" className="mx-auto mb-5" />

        <h1 className='text-xl font-bold text-center'>Meet the team!</h1>
        <section className="grid grid-cols-4 gap-4 mt-4">
          <div className="p-5 shadow rounded">
            <h2 className="text-m font-semibold">Sanketh Mekala</h2>
            <p className='text-xs'>Software Developer</p>
            <img src="mrmaybebig.png" alt="Movie Hub" className="mx-auto mb-5" />
          </div>
          <div className="p-4 shadow rounded">
            <h2 className="text-m font-semibold">Alex Lam</h2>
            <p className='text-xs'>Software Developer</p>
            <img src="PixelDogTailWag.gif" alt="Movie Hub" className="mx-auto mb-5" />
          </div>
          <div className="p-4 shadow rounded">
            <h2 className="text-m font-semibold">Grady Spurrill</h2>
            <p className='text-xs'>Software Developer</p>
            <img src="MushroomAdventurer.png" alt="Movie Hub" className="mx-auto mb-5" />
          </div>
          <div className="p-4 shadow rounded">
            <h2 className="text-m font-semibold">Jaden Whitman</h2>
            <p className='text-xs'>Software Developer</p>
            <img src="birdgoeschirp.png" alt="Movie Hub" className="mx-auto mb-5" />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Admin;
