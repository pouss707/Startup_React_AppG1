import React from 'react'

function SayHiComponent(attributes) {
    console.table(attributes);
    // const myName = "Mehdi dadouh"; <React.Fragment> or <> 
    return (
        <h4> Hi my name is :  { attributes.fName } { attributes.lName} and i m { attributes.age} years old  </h4>
    )
}

//export default function SaySecondHi (){}




export default SayHiComponent