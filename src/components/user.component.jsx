import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function UserComponent(props) {
    console.log( props );
    const user = props.user;
    const keyElement = uuidv4();
    
    return (
        <div className='userContainer' id='userContainer' key={keyElement}>
            <span> { keyElement }</span>
            <h4> User Name : {user.name } </h4>
            <p> Email : {user.email } </p>
            <span> Type : {user.userType }</span>    
            <div>
                <button type="button"> Update Header </button>
            </div>
        </div>
    )
}

export default UserComponent