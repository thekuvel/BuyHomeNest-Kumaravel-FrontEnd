import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
const ProtectedRoutes = ({component})=>{
    const isAuthenticated = Boolean(localStorage.getItem("isAuthenticated"));

    let token = {}

    try {
        let jwtToken = localStorage.getItem("token")

        token = jwtDecode(jwtToken);
    } catch (error) {
        return <Navigate to="/login"/>
    }
    

    // if(isAuthenticated && token.isSignedIn){
    //     return component;
    // }
    
    if(token.isSignedIn){
        return component;
    }

    return <Navigate to="/login"/>

};

export default ProtectedRoutes