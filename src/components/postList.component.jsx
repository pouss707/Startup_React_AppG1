import React, { useEffect, useState } from 'react'
import BaseLayout from '../layouts/base.layout';
import Post from './post.component';

function PostList() {

    const url = "https://jsonplaceholder.typicode.com/posts";
    const [posts, setPosts] = useState([]);
    const style ={border: "1px solid #ccc", padding: "10px", margin: "10px 0", borderRadius: "5px" };
    useEffect(
        ()=>{
            fetch(url)
            .then( response => 
                response
                .json()
                .then( postList =>setPosts(postList) )
                .catch( error => console.log("Failed to parse data ", error))
            ).catch(
              e => console.log("failed to fetch posts ", e)
            )
        }
    )




  return (
    <BaseLayout>
      {
        posts.map(
          item => (
            <Post 
              id={item.id}
              userId={item.userId}
              title={item.title}
              body={item.body}
              style={style}
              key={posts.indexOf(item)}
            />
          )
        )
    
    }</BaseLayout>
  )
}

export default PostList