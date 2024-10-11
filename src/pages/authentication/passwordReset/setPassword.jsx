import { useState } from "react";
import style from "./PasswordReset.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { updatePassword } from "../../../apiCalls/passWordReset";
function SetPassword(){

    let [userInput, setUserInput] = useState({});

    let [searchParams] = useSearchParams();

    const token = searchParams.get("token");
    
    let navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        let res = await updatePassword({...userInput,token});
        
        if(res.code == 1){
            alert("Password updated successfully");
            navigate("/login")
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
				<h5 className={style.xyCenter}>Set New Password</h5>
			</div>

            <div className="mb-3">
				<label htmlFor="Password" className="form-label">New Password</label>
				<input id="password" type="password" name="password" className="form-control" value={userInput.password || ""} onChange={handleInputValueChange}/>
			</div>

            <div className={`mb-3 ${style.xyCenter}`}>
				<button className="btn btn-primary" type="submit">Update Password</button>
			</div>

        </form>

    )
}

export default SetPassword