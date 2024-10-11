import { useEffect, useState } from "react";
import { getAllProperties } from "../../apiCalls/propertiesAPI"
import PropertyCard from "../../components/PropertyCard.jsx";

function Home() {

    let [properties, setProperties] = useState([]);

    async function allProperties(){
        let data = await getAllProperties();
        // console.log(data);
        setProperties(data);
    }
    
    useEffect(()=>{
        allProperties()    
    },[])

    return(
        <div>
            <h5>Home - All Properties</h5>
            
            {properties.map( (property)=>(
                <PropertyCard property={property} key = {property._id}/>
            ) )}

        </div>
    )

}

export default Home