


export const handleSubmit = (submitEvent)=>{
      submitEvent.preventDefault();
      console.log(submitEvent.target[0].value, submitEvent.target[1].value );
      //console.log(userName,userPswd);
      return; 
}


export const handelNameChange = (e)=>{
      console.log("Input Changes :) ");
      setUserName(e.target.value);
      return ;
    }

export const handelPswdChange = (r)=>{
      setUserPswd(r.target.value);
      return;
}
    