import { useState , useEffect } from "react";

export default function FormValidate() {
    // setup submit handler : 
    const handleSubmit = (e)=>{
        console.log("Form Submitted");
    };
    // setup states : 
    const [name, setName] = useState({value:"", message:"", error:false});
    const [email, setEmail] = useState({value:"", message:"", error:false});
    const [password, setPassword] = useState({value:"", message:"", error:false});
    const [passwordConfirmation, setpasswordConfirmation] = useState({value:"", message:"", error:false});
    const [status, setStatus] = useState({name:false, email:false, password:false, passwordConfirmation:false});
    const [disabled, setDisabled] = useState(true);
    // setup error span style :
    const spanStyle = {
        "color": "red",
        "fontSize": "10px"
    };

    useEffect(() => {
    const isFormValid = status.email && status.name && status.password && status.passwordConfirmation   
    setDisabled(!isFormValid);
  }, [status]);


    // setup change handlers : 
    const handleNameChange = (e)=>{
        const { value } = e.target;
        const isValid = value.length > 3;
        setName({
            value,
            message: isValid ? "": "Error : Name must be at least 3 characters",
            error:!isValid
            }
        );
        setStatus(old=> ({...old, name:isValid}));  
    };
    const handleEmailChange = (e)=>{
        const { value } = e.target;
        const isValid = value.length > 5 && value.includes("@") && value.includes(".");
        setEmail({
            value,
            message:isValid?"":"Error : Email must be at least 5 characters and contain @",
            error:!isValid
        });
        setStatus(old =>({...old, email:isValid}));        
    }
    const handlePassordChange = (e)=>{
        // password must be at least 8 characters , 1 number and 1 special character :
         const { value } = e.target;
         const isValid = value.length > 7 && value.match(/[0-9]/) && value.match(/[!@#$%^&*]/);
        setPassword({
            value,
            message:isValid?"":"Error : Password must be at least 8 characters, 1 number and 1 special character",
            error:!isValid
        });
        setStatus(old =>({...old, password:isValid}));
    }
    
    const handlePasswordConfirmationChange = (e)=>{
        const { value } = e.target;
        const isValid = (value === password.value && !password.error);
        setpasswordConfirmation({
                value, 
                message:isValid?"":"Error : Passwords do not match", 
                error:!isValid
            }); 
        setStatus(old =>({...old, passwordConfirmation:isValid}));
    }
          
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name : 
                </label>
                <br />
                <input type="text" 
                placeholder="Full Name "
                value={name.value}
                onChange={handleNameChange}
                />  
                <br />
                {name.error && <span style={spanStyle}> {name.message} </span>  }
            </div>
            <br />
            <div>
                <label>
                    Email : 
                </label>
                <br />
                <input 
                    type="email" 
                    placeholder="User@Email.test" 
                    value={email.value}
                    onChange={handleEmailChange}    
                />
                <br />
                {email.error && <span style={spanStyle}> {email.message} </span>  }    
            </div>
            <br />
            <div>
                <label>
                    Password : 
                </label>
                <br />
                <input 
                    type="password"  
                    value={password.value}
                    onChange={handlePassordChange}
                    placeholder=" Your password please "
                    required
                    />
                    <br />
                    {password.error && <span style={spanStyle}> {password.message} </span>  }
            </div>
            <br />
            <div>
                <label>
                    Password Confirmation  : 
                </label>
                <br />
                <input 
                    type="password"
                    value={passwordConfirmation.value}
                    onChange={handlePasswordConfirmationChange} 
                    placeholder="Confirme your Password "  />
                    <br />
                    {passwordConfirmation.error && <span style={spanStyle}> {passwordConfirmation.message} </span>  }
            </div>
            <br />
            <button type="submit" disabled={disabled }>Submit</button>

        </form>
    )
}