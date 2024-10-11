import { useEffect, useState } from "react"
import { getMyPosts } from "../../apiCalls/propertiesAPI.js"
import { jwtDecode } from "jwt-decode";
import PropertyCard from "../../components/PropertyCard.jsx";

function MyPosts(){

    let [myPosts, setMyPosts] = useState([]);

    let jwtToken = localStorage.getItem("token");
    let token = jwtDecode(jwtToken) 
    // console.log(token.userEmail);

    async function getPosts(){
        let data = await getMyPosts({"userEmail" : token.userEmail})
        setMyPosts(data)
    }

    useEffect(()=>{
        getPosts()
    },[])

    return(
        <div>
            <h5>My Posts</h5>
            <div>
                {myPosts.map((post) => (
                    <PropertyCard property={post} edit={"true"} key={post._id}/>
                ))}
            </div>
        </div>
        
    )
}

export default MyPosts