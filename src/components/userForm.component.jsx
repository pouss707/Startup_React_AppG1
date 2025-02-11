import { useEffect, useState } from "react";

function UserFormComponent(props) {
    // userName , pswd => porps.userName , props.pswd
    const [userName, setUserName] = useState("");
    const [userPswd, setUserPswd] = useState("");

    const handleSubmit = (submitEvent)=>{
      submitEvent.preventDefault();
      console.log(submitEvent.target[0].value, submitEvent.target[1].value );
      // add to local storage :
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          "userName": submitEvent.target[0].value, 
          "pswd": submitEvent.target[1].value,
          "date": new Date().toLocaleDateString(),
          "actif": true
        })
      );
      // clear states :
        setUserName("");
        setUserPswd("");
      //console.log(userName,userPswd);
      return; 
    }
    
    const handelNameChange = (e)=>{
      console.log("Input Changes :) ");
      setUserName(e.target.value);
      return ;
    }

     const handelPswdChange = (r)=>{
      setUserPswd(r.target.value);
      return;
    }


    useEffect(
      ()=>{
          // check if there is a user name :
          if(props.userName=="" || props.userName==undefined){
            // there is no user name :
            alert("No user name !");
          }else{
            setUserName(props.userName);
          }
          if(props.pswd=="" || props.pswd==undefined){
            // there is no user name :
            alert("No user password  !");
          }else{
            setUserPswd(props.pswd);
          }
      },[]
    );

    // facade pattern : full controlled component 
    return (
        <form onSubmit={handleSubmit}>
          <div>
            <input 
                type="text" 
                name="UserName"  
                value={userName} 
                onChange={handelNameChange}
            />
          </div>
          <div>
            <input 
                type="password" 
                name="UserPaswd" 
                value={userPswd} 
                onChange={
                  handelPswdChange
                }
            />
          </div>
          { props.template }
          <br />
          <button type="submit"> add new user  </button>
          
        </form>
  )
}

export default UserFormComponent;