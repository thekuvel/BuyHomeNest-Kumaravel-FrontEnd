import { useEffect, useState } from "react";
import style from "./Email.module.css"
import { sendMail } from "../../apiCalls/email";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

function EmailForm(){
    let [formValue, setFormValue] =  useState({});

    let [searchParams] = useSearchParams();

    let userEmail = searchParams.get("userEmail");
    let ownerEmail = searchParams.get("ownerEmail");
    let propertyId = searchParams.get("propertyId");

    let dispatch = useDispatch();

    function handleChange(e){
        // console.log(formValue);
        setFormValue({
            ...formValue,
            [e.target.name] : e.target.value,
        }
        )
    }

    async function handleSubmit(e){
        formValue.message += `\n Meeting scheduled on ${formValue.date}, at ${formValue.time}`
        e.preventDefault();
        console.log("Send Mail.", formValue)
        let result = await sendMail({...formValue})
        if(result.code == 1){
            dispatch({type : "showAlert", message : result.msg})
        }else{
            dispatch({type : "showAlert", message : result.msg})
        }
        // location.reload()
        formValue.message = ""
    }

    useEffect(()=>{
        
        setFormValue({
            toEmail:userEmail,
            subject : `Regarding propert Id ${propertyId}`,
        });
    },[])

    return(
        <form className={`row ${style.emailForm}`} onSubmit={handleSubmit}>
            <div className="col-12 mb-3">
                <label htmlFor="toEmail" className="form-label">To:</label>
                <input type="email" className="form-control" name="toEmail" id="toEmail" onChange={handleChange} value={formValue.toEmail || ""} placeholder="To Email Id"/>
            </div>
            <div className="col-12 mb-3">
                <label htmlFor="subject" className="form-label">Subject:</label>
                <input type="text" className="form-control" name="subject" id="subject" onChange={handleChange} value={formValue.subject || ""} placeholder="Subject"/>
            </div>
            <div className="col-6 mb-3">
                <label htmlFor="date" className="form-label">Date:</label>
                <input type="date" className="form-control" name="date" id="date" onChange={handleChange}/>
            </div>
            <div className="col-6 mb-3">
                <label htmlFor="time" className="form-label">Time:</label>
                <input type="time" className="form-control" name="time" id="time" onChange={handleChange}/>
            </div>
            <div className="col-12 mb-3">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea rows="5" className="form-control" name="message" id="message" onChange={handleChange} value={formValue.message || ""} placeholder="Message"/>
            </div>
            <button type="submit" className="col-xs-12 col-md-2 col-lg-2 col-xl-1 btn btn-outline-primary">Send Mail</button>
        </form>
    )
}

export default EmailForm