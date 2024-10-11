
let url = `${import.meta.env.VITE_BACKEND_URL}/register`

async function createUser(payLoad){
    // console.log(payLoad);
    
    let res = await fetch(url, {
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(payLoad)
    })
    let data = await res.json();
    console.log(data);
    return data;
}

export {createUser}