
let url = `${import.meta.env.VITE_BACKEND_URL}/user`

async function getAllAgents(){
    let res = await fetch(`${url}/allagents`,{
        headers : {
            Authorization : localStorage.getItem("token")
        }
    });
    let data = await res.json();
    return data;
}

async function updateAgents(payload){
    let res = await fetch(`${url}/updateagent`,{
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

async function deleteAgents(payload){
    let res = await fetch(`${url}/deleteagent`,{
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


async function addToWishlist(payload){
    let res = await fetch(`${url}/addtowishlist`,{
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


async function getMyWishlist(payload){
    let res = await fetch(`${url}/getMyWishlist`,{
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


async function contactAgent(payload){
    let res = await fetch(`${url}/contactAgent`,{
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

async function getAllContact(){
    let res = await fetch(`${url}/getAllContact`,{
        method : "GET",
        headers : {
            Authorization : localStorage.getItem("token"),
            "Content-Type" : "application/json"
        }
    });
    let data = await res.json();
    return data;
}


export {getAllAgents, updateAgents, deleteAgents, addToWishlist, getMyWishlist, contactAgent, getAllContact}