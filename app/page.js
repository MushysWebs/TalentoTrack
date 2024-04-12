// 'use client'
// import { useState, useEffect } from 'react';
// import AddPost from "./components/AddPost";
// import PostList from "./components/PostList";
// import { getSession } from "next-auth/react";

// async function getData() {
//   const res = await fetch('http://localhost:3000/api/posts', {cache: "no-cache"})
//   if(!res.ok) {
//     throw new Error("Failed to fetch data")
//   }
//   return res.json();
// }

// const Page = () => {
//   const [session, setSession] = useState(null);
//   const [posts, setPosts] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const userSession = await getSession();
//       setSession(userSession);
      
//       if (userSession) {
//         try {
//           const postsData = await getData();
//           setPosts(postsData);
//         } catch (error) {
//           setError(error);
//         }
//       }
//     };

//     fetchData();
//   }, []);

//   if (!session) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//       <div className="text-center">
//         {/* Display the message to prompt the user to log in */}
//         <p className="text-lg font-semibold mb-2">Please log in to access this feature.</p>
//       </div>
//     </div>
//     );
//   }

//   if (error) {
//     return <div>Error fetching data: {error.message}</div>;
//   }

//   if (!posts) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <main>
//       <AddPost />
//       <PostList post={posts} />
//     </main>
//   );
// }

// export default Page;

'use client'
import { useState, useEffect } from 'react';
import AddPost from "./components/AddPost";
import PostList from "./components/PostList";
import { getSession } from "next-auth/react";

async function getData() {
  const res = await fetch('https://talento-track.vercel.app/api/posts', {cache: "no-cache"})
  if(!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json();
}

// async function getData() {
//   const res = await fetch('http://localhost:3000/api/posts', {cache: "no-cache"})
//   if(!res.ok) {
//     throw new Error("Failed to fetch data")
//   }
//   return res.json();
// }

const Page = () => {
  const [session, setSession] = useState(null);
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userSession = await getSession();
      setSession(userSession);

      if (userSession) {
        try {
          const postsData = await getData();
          setPosts(postsData);
        } catch (error) {
          setError(error);
        }
      }
    };

    fetchData();

    // Polling to refresh data every 1 seconds
    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen">
      <div className="border-solid bg-gray-200 p-5 rounded-xl text-center shadow-lg'">
        {/* Display the message to prompt the user to log in */}
        <p className="text-lg font-semibold mb-2">You currently don't have access to this page, Please log in to gain access.</p>
      </div>
    </div>
    );
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <AddPost />
      <PostList post={posts} />
    </main>
  );
}

export default Page;
