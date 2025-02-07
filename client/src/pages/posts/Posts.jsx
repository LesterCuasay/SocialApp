import React from 'react'
import { useSelector } from 'react-redux'
import Post from './PostCreateForm'

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    console.log(posts)
  return (
    <div>
      <Post />
    </div>
  )
}

export default Posts