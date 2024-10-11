import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { getMyWishlist } from "../../apiCalls/users";
import PropertyCard from "../../components/PropertyCard";

function MyWishlist(){

    let [properties, setProperties] = useState([])

    let jwtToken = localStorage.getItem("token");
    let token = jwtDecode(jwtToken);

    async function myWishlist(){
        let result = await getMyWishlist({ email : token.userEmail})

        console.log(result);
        
        
        if(result.code !== 1){
            return(<>Error in fetching wishlist</>)
        }

        setProperties(result.properties);
    }

    useEffect(()=>{
        myWishlist()
    },[])

    return(
        <>
            <h5>My Wishlist</h5>
            {properties.map( (property)=>(
                <PropertyCard property={property} key = {property._id}/>
            ) )}
        </>
    )
}

export default MyWishlist