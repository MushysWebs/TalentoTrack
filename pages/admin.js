import React, { useEffect, useState } from 'react';
import Layout from "../app/layoutAdmin";
import { getSession } from 'next-auth/react';

const Admin = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userSession = await getSession();
      setSession(userSession);
    };

    fetchData();
  }, []);

  if (!session) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Please log in to access this page.</p>
          </div>
        </div>
      </Layout>
    );
  }

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
