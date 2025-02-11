import React from 'react'

function WelcomeComponent(props) {
    // name = "John"
  return (
    <div>Welcome : { props.fname} {props.lname} </div>
  )
}

export default WelcomeComponent