import { Link, Outlet } from "react-router-dom"
import style from "./Layout.module.css"
import { logout } from "../../general/logout"
import { jwtDecode } from "jwt-decode";
import AlerMessageCard from "../../components/AlertMessage";

import BuyHomeNest_Logo from "../../assets/BuyHomeNest_Logo.png"

const links = [
    {
        name : "Home",
        path : "/"
    },
    {
        name : "Post Advertisement",
        path : "/post"
    },
    {
        name : "MyPosts",
        path : "/myposts"
    }
    ,
    {
        name : "My Wish List",
        path : "/mywishlist"
    }
]

function handleLogout(){
    logout();
    location.reload()
}

const Layout = () =>{

    let signedInUser = {}

    let jwtToken = localStorage.getItem("token");
    if(jwtToken){

        let token = jwtDecode(jwtToken);
        signedInUser = token

        if(token.userType == "agent"){
            links.push({
                name : "Agent",
                path : "/agent"
            },
            {
                name : "Admin",
                path : "/admin"
            },
        )
        }
    }
    
    return(
        <>
        <header>

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={BuyHomeNest_Logo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {links.map((link) => (
                            <li className="nav-item border-start" key={link.path}>
                            <a className="nav-link active" aria-current="page" href={link.path}>{link.name}</a>
                            </li>
                        ))}

                    </ul>
                    <p className="navbar-nav me-2 mb-2 mb-lg-0">{signedInUser.userEmail}</p>
                    <button className="btn btn-outline-danger" type="submit" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </nav>

        </header>
        
        
        <AlerMessageCard/>

        <div>
            <Outlet/>
        </div>
        </>
    )
}

export default Layout