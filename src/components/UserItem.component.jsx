import React, { useEffect, useState } from 'react'
import BaseLayout from '../layouts/base.layout';
import { useParams } from 'react-router-dom';

function UserItem() {
    // useState | useRouter | useParams
    const { userId }  = useParams();
    const [userPayload,setUserPayload] = useState({});
    const [isError, setIsError] = useState(false);

    const isValideId = (id)=> {return id>0 && id<11}

    // "" : {key:value}

    useEffect(
        ()=>{
            console.log("User id changes ")
            
            if( isValideId(userId)){
                // fetch api : Promise  async / await 
            fetch("https://jsonplaceholder.typicode.com/users/"+userId)
            .then(
                response  => response
                .json()
                .then( data => {
                    console.log( "user with id : ",userId , " ", data)
                    setUserPayload({...data});
                }).catch( e => console.log(e))
            ).catch( error => console.log(error ));
            return;
            }else{
                setIsError(true);
                return;
            }
        
        },[userId]
    );

    return (

        <BaseLayout>
        {
            isError ? ( <div> Erro while trying to fecth user Data </div>)
            :(
                <>
                    Users  : { userPayload.id }
                        <br /><br />
                        User Name : { userPayload.username   }
                        <br /><br />
                        
                        Full Name : { userPayload.name }
                        <br /><br />
                        
                        User Email : { userPayload.email }
                        <br /><br />
                        
                        Phone Number : { userPayload.phone }    
                </>
            )
        }  
        </BaseLayout>
    )
}
export default UserItem;