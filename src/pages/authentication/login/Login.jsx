import { Link, useNavigate } from "react-router-dom"
import style from "./Login.module.css"
import { useState } from "react"
import { loginUser } from "../../../apiCalls/loginAPI";


function Login() {
    
    let [userInput, setUserInput] = useState({});

    let navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        //call api and pass payLoad
        let response = await loginUser(userInput);    
        
        if(response.code == 1){
            localStorage.setItem("token",response.token)    
            // localStorage.setItem("isAuthenticated", true)
            navigate("/")
        }else{
            alert(response.msg)
        }
    }

    function handleInputValueChange(event){
        setUserInput({
            ...userInput,
            [event.target.name] : event.target.value
        })
    }

    return(
        <div className={style.formContainer} >
		
            <form onSubmit={handleSubmit}>

                <div>
                    <h4 className={style.xyCenter}>Buy Home Nest</h4>
                    <h5 className={style.xyCenter}>LogIn</h5>
                </div>

                <div className="mb-3">
                    <label htmlFor="emailId" className="form-label">Email address</label>
                    <input id="emailId" type="email" name="emailId" className="form-control" value={userInput.emailId || ""} required onChange={handleInputValueChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input id="password" type="password" name="password" className="form-control" value={userInput.password || ""} required onChange={handleInputValueChange}/>
                </div>

                <div className={`mb-3 ${style.xyCenter}`}>
                    <button type="submit" className="btn btn-primary">LogIn</button>	
                </div>

                <div className={`mb-3 ${style.xyCenter}`}>
                    <a href="/passwordreset">Forgot Password</a>
                </div>
                
                <div className={`mb-3 ${style.xyCenter}`}>
                    <Link className="btn btn-outline-primary" to="/register">Create New account, SignUp</Link>
                </div>

            </form>

	    </div>
    )
}

export default Login