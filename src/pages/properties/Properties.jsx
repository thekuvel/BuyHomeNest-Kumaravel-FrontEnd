
import { Link } from "react-router-dom";
import { getAllProperties } from "../../apiCalls/propertiesAPI"
import { logout } from "../../general/logout";

function Properties(){
   
    async function allPropertiesData(){
        let data = await getAllProperties();
        console.log(data);
    }

    allPropertiesData();

    function handleLogout(){
        logout();
        location.reload()
    }
    
    return(
        <div>
            <Link to="/">Home</Link>
            <br />
            <Link to="/properties">properties</Link>
            <button className="btn btn-primary" onClick={handleLogout}>LogOut</button>
            <h1>Properties Page. Properties from db in console</h1>

        </div>
    )
}

export default Properties