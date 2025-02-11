import { useEffect, useState } from "react";

export default function TableSorting(){
    
    // userList state :
    const [userList,setUserList] = useState([]);
    const [filtredUsers, setFiltredUsers] = useState([]);
    const [order,setOrder] = useState("asc");
    const [selected, setSelected] = useState("name")
    // setup useEffect to fetch data : 
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then( respons => respons.json().then(data => {setUserList(data), setFiltredUsers(data)} ))
        .catch( error => console.log( error ));
    },[]);
    
    const headerStyle = {
        "cursor":"pointer"
    };

    const sortUsers = (critaire)=>{
        setSelected(critaire);
        const sortedList = [...filtredUsers].sort((a, b) => {
            if (order === "asc") {
                return a[critaire] > b[critaire] ? 1 : -1;
            } else {
                return a[critaire] < b[critaire] ? 1 : -1;
            }
        });
        setFiltredUsers(sortedList);
        setOrder(order === "asc" ? "desc" : "asc");
    }
    const handleSearch = (e)=>{
        e.target.value = e.target.value.toLowerCase();
        const {value} = e.target;
        if(value.length === 0 ) setFiltredUsers(userList);
        setFiltredUsers([...userList].filter( item => item[selected].toLowerCase().includes(value)));
    }


    return(
        <>
            <input type="text" placeholder={"Search for user by "+selected} onChange={handleSearch}  />
            <br />
            <br />
        
        <table>
            <thead>
                <tr>
                    <th style={headerStyle} onClick={(e)=>sortUsers("name")}> 
                        Name { selected === "name" && order === "asc"? (<>↑</>):(<>↓</>)} 
                    </th>
                    <th style={headerStyle} onClick={(e)=>sortUsers("email")}> Email { selected === "email" &&  order === "asc"? <>↑</>:<>↓</>}</th>
                    <th style={headerStyle} onClick={(e)=>sortUsers("phone")}> Phone { selected === "phone" && order === "asc"? <>↑</>:<>↓</>}</th>
                </tr>
            </thead>
            <tbody>
                { filtredUsers.map(
                    user => ( <tr key={user.id}>
                        <td> { user.name.toLowerCase()}</td>
                        <td> { user.email.toLowerCase() }</td>
                        <td> { user.phone } </td>
                    </tr>)
                )}
            </tbody>
        </table>
        </>
    );
}