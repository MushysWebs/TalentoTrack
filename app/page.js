'use client'
import AddPost from "./components/AddPost";
import PostList from "./components/PostList";
import LogInBtn from "./components/LogInBtn";
import { getSession } from "next-auth/react";


// async function getData() {
//   const res = await fetch('https://talento-track.vercel.app/api/posts', {cache: "no-cache"})
//   if(!res.ok) {
//     throw new Error("Failed to fetch data")
//   }
//   return res.json();
// }

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {cache: "no-cache"})
  if(!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json();
}

const page = async () => {
  // // Check if the user session exists:
  // const session = await getSession();

  // // If user is not authenticated, redirect them to login page:
  // if (!session) {
  //   return (
  //     <div>
  //       Please log in to access this page.
  //     </div>
  //   );
  // }

  // If user is authenticated, fetch and display the page content:
  try {
    const posts = await getData();
    console.log(posts);
    return (
      <main>
        <AddPost />
        <PostList post={posts} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
}

export default page;