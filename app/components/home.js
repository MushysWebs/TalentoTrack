'use client'
import AddPost from "./AddPost";
import PostList from "./PostList";
import UserInfo from "./UserInfo";


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

const home = async () => {
  try {
    const posts = await getData();
    console.log(posts);
    return (
      <main className="">
        <AddPost />
        <PostList post={posts} />
      </main>
      
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
}


export default home;