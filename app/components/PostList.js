import React from 'react'
import Post from './Post'
const PostList = ({ post }) => {
  console.log("I am in PostList", post)
  return (
    <ul>
      {post.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </ul>
  )
}

export default PostList