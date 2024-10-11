import { useEffect, useState } from "react";
import { getAllAgents } from "../../apiCalls/users.js";
import UserCard from "../../components/UserCard.jsx";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Admin(){

    let jwtToken = localStorage.getItem("token");
    if(jwtToken){
        let token = jwtDecode(jwtToken);

        if(token.userType !== "agent"){
            return <Navigate to="/"/>
            }
        }

    let[agents, setAgents] = useState([]);

    async function allAgents(){
        let data = await getAllAgents();
        setAgents(data);
    }

    useEffect(()=>{
        allAgents();
    },[])

    return (
        <>
            <h5>Admin</h5>
            {agents.map((user)=>(
                <UserCard user={user} key={user._id}/>
            ))}
        </>
    )
}

export default Admin