
import { useEffect, useState } from "react";
import style from "./UserCard.module.css"
import { deleteAgents, updateAgents } from "../apiCalls/users.js";
import { logout } from "../general/logout.js";
import { useDispatch } from "react-redux";

function UserCard({user}){

    let dispatch = useDispatch()

    // console.log(user.userEmail);
    
    
    let [formValue, setFormValue] =  useState({});
    let [edit, setEdit] =  useState(false);
    
    function handleChange(e){
        
        setFormValue({
            ...formValue,
            [e.target.name] : e.target.value,
        }
        )
    }

    function handleEdit(){
        // console.log("Edit");
        setEdit(!edit);
    }

    async function handleUpdate(){
        // console.log("Update");
        let result = await updateAgents({...formValue,email : user.userEmail})
        if(result.code == 1){
            // alert(result.msg);
            dispatch({type : "showAlert", message : result.msg})
        }else{
            // alert(result.msg)
            dispatch({type : "showAlert", message : result.msg})
        }
        setEdit(false);
        // location.reload();
    }

    async function handleDelete(){
        console.log("Delete");
        let result = await deleteAgents({email : user.userEmail})
        if(result.code == 1){
            // alert(result.msg);
            dispatch({type : "showAlert", message : result.msg})
        }else{
            // alert(result.msg)
            dispatch({type : "showAlert", message : result.msg})
        }
        location.reload();
        logout()
    }

    useEffect(()=>{
        if(user){
            setFormValue({...user});
        }
    },[])


    return(
        <form className={`row ${style.userCard}`}>
            <div className="col-12 col-lg-3 mb-3">
                <input type="text" className="form-control" name="userEmail" id="userEmail" onChange={handleChange} value={formValue.userEmail || "userEmail"} disabled = {edit==true ? false : true }/>
            </div>
            <div className="col-12 col-lg-3 mb-3">
                <input type="text" className="form-control" name="userName" id="userName" onChange={handleChange} value={formValue.userName || "userName"} disabled = {edit==true ? false : true }/>
            </div>
            <div className="col-12 col-lg-3 mb-3">
                <input type="text" className="form-control" name="userType" id="userType" onChange={handleChange} value={formValue.userType || "userType"} disabled = {edit==true ? false : true }/>
            </div>
            <div className="col-12 col-lg-3 mb-3">    
            <button type="button" className={`btn btn-outline-primary ${style.button}`} onClick={handleEdit}>{edit? "Cancel" : "Edit"}</button>
            {
            edit ? 
            <button type="button" className={`btn btn-warning ${style.button}`} onClick={handleUpdate}>Update</button>
            : 
            <button type="button" className={`btn btn-danger ${style.button}`} onClick={handleDelete}>Delete</button>
            }    
            </div>
        </form>
    )
}

export default UserCard