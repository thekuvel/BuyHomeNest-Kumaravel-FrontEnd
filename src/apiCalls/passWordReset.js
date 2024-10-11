import { json } from "react-router-dom"

let url = `${import.meta.env.VITE_BACKEND_URL}`

async function verifyEmail(payLoad){
    
    let res = await fetch(`${url}/emailVerification`, {
        headers : {
            "Content-Type" : "application/json"
        },
        method : 'POST',
        body : JSON.stringify(payLoad),
    })

    let data = await res.json()
    return data
}

async function updatePassword(payload){
    // console.log(payload);
    
    let res = await fetch(`${url}/updatePassword`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(payload)
    })

    let data = await res.json();
    return data;
}

export {verifyEmail,updatePassword}