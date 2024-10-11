import { useParams } from "react-router-dom";
import PostForm from "../../components/PostForm.jsx";
import { useEffect, useState } from "react";
import { getSingleProperty } from "../../apiCalls/propertiesAPI.js";

function EditPost(){

    let[property,setProperty] = useState({});
    let {propertyId} = useParams("propertyId");
    // console.log(propertyId);

    //Call Api to get single property data with above id
    async function getProperty(){
        let data = await getSingleProperty({propertyId});
        setProperty(data);
    }
    
    useEffect(()=>{
        getProperty()
    },[])
    return(
        <div>
            <h5>Update Property Advertisment</h5>

            <PostForm editPost={"true"} property={property}/>

        </div>
    )
}

export default EditPost