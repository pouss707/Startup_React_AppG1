import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Post from './post.component';

function PostItem() {
    const { postId } = useParams();
    const [ postPayload, setPostPayload] = useState({});
    const url = "https://jsonplaceholder.typicode.com/posts/"+postId;
    const validate = (id)=> (id>0 && id<101);
    const style ={
        border: "1px solid #ccc",
        padding: "10px", 
        margin: "10px 0", 
        backgroundColor:"#white",
        color:"red",  
        borderRadius: "5px" };


    // fetch data : 
    useEffect(
        ()=>{
            if(!validate(postId))return;
            fetch(url).then( response => response.json().then(postPayload => setPostPayload({...postPayload}) ))
            return ;
        }
    )


    return (
        <Post 
            style={style} 
            id={postPayload.id} 
            userId={postPayload.userId} 
            title ={ postPayload.title }
            body={ postPayload.body } 
        />
  )
}

export default PostItem