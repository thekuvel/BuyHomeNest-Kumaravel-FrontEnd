let url = `${import.meta.env.VITE_BACKEND_URL}/property`

async function getAllProperties(){
    let res = await fetch(url,{
        headers : {
            Authorization : localStorage.getItem("token")
        }
    });
    let data = await res.json();
    return data;
}

async function getMyPosts(payload) {
    let res = await fetch(`${url}/getmydata`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            Authorization : localStorage.getItem("token")
        },
        body: JSON.stringify(payload)
    })
    let data = await res.json();
    return data
}

async function getSingleProperty(payload){
    let res = await fetch(`${url}/getSingleProperty`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            Authorization : localStorage.getItem("token")
        },
        body: JSON.stringify(payload)
    })
    let data = await res.json();
    return data
}

async function createProperty(payload){
    let res = await fetch(`${url}/create`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            Authorization : localStorage.getItem("token")
        },
        body : JSON.stringify(payload)
    })
    let data = await res.json();
    return data
}

async function updateProperty(payload){
    let res = await fetch(`${url}/update`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            Authorization : localStorage.getItem("token")
        },
        body : JSON.stringify(payload)
    })
    let data = await res.json();
    return data
}

async function deleteProperty(payload){
    let res = await fetch(`${url}/delete`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            Authorization : localStorage.getItem("token")
        },
        body : JSON.stringify(payload)
    })
    let data = await res.json();
    return data
}

export {getAllProperties, getMyPosts,getSingleProperty, createProperty, updateProperty, deleteProperty}