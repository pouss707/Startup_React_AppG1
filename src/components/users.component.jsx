
import React, { useEffect, useState} from 'react'
import UserList from '../shared/users.list';
import UserComponent from './user.component';


function UsersComponent() {
    //React.NodeElement / React.ChiledElement / React.Node // TSX
    const filtredArray = UserList.filter(user=> user.userType === "user");
    const isNoEmpty = filtredArray.length > 0;
    const [isLoading, setIsLoading] = useState(false);
    // state 

    useEffect(
        ()=>{
            console.log("UsersComponent is rendered");
            console.log("UsersComponent is mounted");
            setIsLoading(true);
        }
    );

    return (
        <div>
            {
                isLoading && <p>Loading Users data ...</p>
            }
            {
                isNoEmpty ? (<>
                    {
                    filtredArray.map(
                        user => <UserComponent key={user.id} user={user} />
                    )}
                 <button onClick={ ()=> {setIsLoading(true)}}> enable me </button>
                </>
                    
                ):(
                    <>
                        <p> No users found </p>
                        <button onClick={ ()=> {setIsLoading(true)}}> enable me </button>
                    </>
                    )
            }
        </div>
  )
}

export default UsersComponent