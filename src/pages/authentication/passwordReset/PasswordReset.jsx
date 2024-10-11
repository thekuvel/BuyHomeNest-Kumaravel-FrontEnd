import { useState } from "react";
import style from "./PasswordReset.module.css";
import { verifyEmail } from "../../../apiCalls/passWordReset";

function PasswordReset(){

    let [userInput, setUserInput] = useState({});


    async function handleSubmit(e){
        e.preventDefault();
        let res = await verifyEmail(userInput)
        // console.log(res);
        
        if(res.code == 1){
            alert("Mail triggered");
        }else{
            alert(res.msg);
        }
    }
    
    function handleInputValueChange(e){
        setUserInput({
            ...userInput,
            [e.target.name] : e.target.value
        });
    }

    return(
        
        <form className={style.formContainer} onSubmit={handleSubmit}>
            
            <div>
                <h4 className={style.xyCenter}>Buy Home Nest</h4>
				<h5 className={style.xyCenter}>Password Reset Verify Email</h5>
			</div>

            <div className="mb-3">
				<label htmlFor="emailId" className="form-label">Email address</label>
				<input id="emailId" type="email" name="emailId" className="form-control" value={userInput.emailId || ""} onChange={handleInputValueChange}/>
			</div>

            <div className={`mb-3 ${style.xyCenter}`}>
				<button className="btn btn-primary" type="submit">Send password reset link</button>
			</div>
            <div className={`mb-3 ${style.xyCenter}`}>
            <a href="/login">Login</a>
			</div>

        </form>
    )
}

export default PasswordReset