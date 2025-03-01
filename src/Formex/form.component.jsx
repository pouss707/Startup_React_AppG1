import React, { useState, useEffect } from 'react'

function Formcomponent(props) {
    const [username, setUsername] = useState("")
    const [pswd, setPswd] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")

    const HandleSubmit = (submited) => {
        submited.preventDefault();
        console.log(
            "form submitted:",
            "Name:", NameChange,
            "Password:", PswdChange,
            "Email:", EmailChange,
            "Subject:", SubjectChange
        )
        setUsername("");
        setPswd("");
        setEmail("");
        setSubject("");
        return;
    }

    const NameChange = (n) => {
        setUsername(n.target.value);
        return;
    }
    const PswdChange = (p) => {
        setPswd(p.target.value);
        return;
    }
    const EmailChange = (e) => {
        setEmail(e.target.value);
        return;
    }
    const SubjectChange = (s) => {
        setSubject(s.target.value);
        return;
    }
    useEffect(
        () => {
            if (props.username == "" || props.username == undefined) {
                alert("No user name !");
            } else {
                setUsername(props.username);
            }
            if (props.pswd == "" || props.pswd == undefined) {
                alert("No user password  !");
            } else {
                setUserpswd(props.pswd);
            }
            if (props.email == "" || props.email == undefined) {
                alert("No user email !");
            } else {
                setEmail(props.email)
            }
            if (props.subject == "" || props.subject == undefined) {
                alert("No user email !");
            } else {
                setSubject(props.subject)
            }
        }, [props.username, props.pswd, props.email, props.subject]);
    return (
        <form onSubmit={HandleSubmit}>
            <div>
                <input
                    type="text"
                    name="UserName"
                    value={username}
                    onChange={NameChange}
                />
            </div>
            <div>
                <input
                    type="password"
                    name="UserPswd"
                    value={pswd}
                    onChange={PswdChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="UserEmail"
                    value={email}
                    onChange={EmailChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="Subject"
                    value={subject}
                    onChange={SubjectChange}
                />
            </div>
            <br />
            <button type="submit"> SEND </button>
        </form>
    )
}

export default Formcomponent