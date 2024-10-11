let url = `${import.meta.env.VITE_BACKEND_URL}/email`

async function sendMail(payload){
    let res = await fetch(`${url}/send`,{
        method : "POST",
        headers : {
            Authorization : localStorage.getItem("token"),
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(payload)
    });
    let data = await res.json();
    return data;
}

export {sendMail}