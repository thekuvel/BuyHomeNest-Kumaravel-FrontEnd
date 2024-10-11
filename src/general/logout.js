function logout(){
    localStorage.setItem("token", "");
}

export {logout}