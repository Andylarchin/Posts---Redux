import React from 'react'
import { useSelector } from 'react-redux'

const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts)
  return (
    <div>
        <br/>
        <h2>Posts:</h2>
        <br/>
        {posts.map(data => {
            return (
                <article key = {data.id}>
                    <h3>{data.title}</h3>
                    <p>{data.content.substring(0,100)}</p>
                </article>
            )
        })}
    </div>
  )
}

export default PostsList;