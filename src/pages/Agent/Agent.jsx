import style from "../../components/UserCard.module.css"
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Navigate} from "react-router-dom";
import { getAllContact } from "../../apiCalls/users.js";
import { useDispatch } from "react-redux";
import ContactAgentCard from "../../components/ContactAgentCard.jsx";

function Agent(){

    let dispatch = useDispatch();

    let [contacts, setContacts] = useState([]);

    let jwtToken = localStorage.getItem("token");
    if(jwtToken){
        let token = jwtDecode(jwtToken);

        if(token.userType !== "agent"){
            return <Navigate to="/"/>
            }
        }

    
    async function getContactAgentList(){
        let result = await getAllContact();
        setContacts(result.contacts);
        
        if(result.code == 1){
            // alert(result.msg);
            dispatch({type : "showAlert", message : result.msg})
        }else{
            dispatch({type : "showAlert", message : result.msg})
            console.log(result.error);
        }
    }

    useEffect(()=>{
        getContactAgentList();
    },[])

    return(
        <>
        <h5>Agent Page - Users who want to connect with agents.</h5>

        <div className={`row ${style.userCard}`}>
            <div className="col-12 col-lg-3 mb-3">
                <input type="text" className="form-control" name="userEmail" id="userEmail" value={"User Email"} disabled/>
            </div>
            <div className="col-12 col-lg-3 mb-3">
                <input type="text" className="form-control" name="userName" id="userName" value={"Property ID"} disabled/>
            </div>
            <div className="col-12 col-lg-3 mb-3">
                <input type="text" className="form-control" name="userType" id="userType" value={"Property Owner"} disabled/>
            </div>
            <div className="col-12 col-lg-3 mb-3">    
                <input type="text" className="form-control" name="userType" id="userType" value={"Action"} disabled/>
            </div>
        </div>

        {contacts.map((contact)=>(
            <ContactAgentCard contact={contact} key={contact._id}/>
        ))}
        </>
    )
}

export default Agent