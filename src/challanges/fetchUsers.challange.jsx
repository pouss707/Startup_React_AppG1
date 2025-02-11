

import { useState, useEffect } from "react";
const endpoint = 'https://jsonplaceholder.typicode.com/users';

// my coding challange :

export default function FetchUsers() {
  // create a state to save all users for the api response :
  const [userList, setUserList] = useState([]);
  // add new state to manage error :
  const [failed, setFailed] = useState(false);
  // add new loading state :  
  const [loading, setLoading] = useState(false);
  // call useEffect to fetch data form endpoint :
 

  useEffect(() => {
    setLoading(true);
    fetch(endpoint)
      .then(
        response =>{
          // check if response is ok :
          setLoading(false);
          if (!response.ok) { setFailed(true); return }
          // take the response as json format :
          response
        .json().then(data => {setLoading(false); setUserList(data)})
        } 
      )
      .catch(error => {
        console.log('error fetching users ');
        setFailed(true);
      });
  },[]);

  return <>
    <h4>User list from api :</h4>
    { loading && !failed &&  (<p> Loading ... </p>) }
    {
      failed ? (<p> Failed to fetch users pleas try later </p>):(
        <ul>
          {userList.map( 
            user => (<li key={user.id}>{user.name}</li>)
          )}
        </ul>
      )
    }
  </>;
}