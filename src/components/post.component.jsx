import React from 'react'

function Post({id,userId, title, body, style}) {
  return (
    <div style={style} >
        <span> { id } 
            <a href={'/user/'+ userId }> by :{ userId}</a>    
        </span>
        <br />
        <h3> { title }</h3>
        <br />
        <p> { body }</p>
    </div>
  )
}

export default Post;