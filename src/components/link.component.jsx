import React from 'react'

function LinkComponent(props) {
  return (
    <a 
    style={props.style}
    href={props.href}  
    > {props.text} </a>
  )
}

export default LinkComponent