import { useState } from "react";
import style from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../../apiCalls/registerApi.js";

function Register(){
    let navigate = useNavigate();

    let [userInput, setUserInput] = useState({});

    async function handleSubmit(e){
        e.preventDefault();
        //Call user create API
        let res = await createUser(userInput);
        console.log(res)
        if(res.code == 1){
            navigate("/")
        }else{
			alert(res.msg);
		}
		
    }

    function handleInputValueChange(e){
        setUserInput({
            ...userInput,
            [e.target.name] : e.target.value
        })
    }

    return(
        <form className={style.formContainer} onSubmit={handleSubmit}>

			<div>
                <h4 className={style.xyCenter}>Buy Home Nest</h4>
				<h5 className={style.xyCenter}>Register</h5>
			</div>

			<div className="mb-3">
				<label htmlFor="userName" className="form-label">Name</label>
				<input id="userName" type="text" name="userName" className="form-control" value={userInput.userName || ""} onChange={handleInputValueChange}/>
			</div>
			<div className="mb-3">
				<label htmlFor="emailId" className="form-label">Email address</label>
				<input id="emailId" type="email" name="emailId" className="form-control" value={userInput.emailId || ""} onChange={handleInputValueChange}/>
			</div>
			<div className="mb-3">
				<label htmlFor="Password" className="form-label">Password</label>
				<input id="password" type="password" name="password" className="form-control" value={userInput.password || ""} onChange={handleInputValueChange}/>
			</div>
			<div className="mb-3">
				<label htmlFor="userType" className="form-label">Are you an agent?</label>
				<input id="userType" type="text" name="userType" className="form-control" value={userInput.userType || ""} onChange={handleInputValueChange} placeholder="Enter 'agent' if you are an agent. Leave empty if not."/>
			</div>

			<div className={`mb-3 ${style.xyCenter}`}>
				<button className="btn btn-primary" type="submit">Register</button>
			</div>

			<div className={`mb-3 ${style.xyCenter}`}>
				<Link className="btn btn-outline-primary" to="/">Alredy have an account? Then, Login</Link>	
			</div>
			

		</form>
    )
}

export default Register