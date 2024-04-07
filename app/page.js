'use client'
import AddPost from "./components/AddPost";
import PostList from "./components/PostList";

async function getData() {
  const res = await fetch('https://movie-app-plum-alpha.vercel.app/api/posts', {cache: "no-cache"})
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

const page = async () => {
  try {
    const posts = await getData();
    console.log(posts);
    return (
      <main className="flex min-h-screen flex-col justify-between p-24 h-14 ">
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