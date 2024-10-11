
import { useDispatch } from "react-redux"
import { deleteProperty } from "../apiCalls/propertiesAPI.js"
import style from "./PropertyCard.module.css"
import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode";
import { addToWishlist, contactAgent } from "../apiCalls/users.js";

function PropertyCard({property,edit}){

    let dispatch = useDispatch();
    
    let jwtToken = localStorage.getItem("token");
    let token = jwtDecode(jwtToken);

    let saleStatus = "For Sale"
    if(property.isSold){
        saleStatus = "Sold"
    }

    let navigate = useNavigate()

    function handleEdit(e){
        navigate(`/editpost/${property._id}`)
    }

    async function handleDelete(){
        console.log(property._id);
        let result = await deleteProperty({id : property._id})
        if(result.code == 1){
            // alert(result.msg);
            location.reload();
        }else{
            alert(result.msg);
            console.log(result.error);
        }
    }

    async function handleWishlist(){
        // console.log(token);

        let result = await addToWishlist({propertyId : property._id, email : token.userEmail })
        if(result.code == 1){
            // alert(result.msg);
            dispatch({type : "showAlert", message : result.msg})
        }else{
            dispatch({type : "showAlert", message : result.msg})
            console.log(result.error);
        }
    }

    async function handleContactAgent() {
        // console.log(token);
        // console.log("Contact");
        let result = await contactAgent({propertyId : property._id, userEmail : token.userEmail, ownerEmail : property.ownerEmail});
        if(result.code == 1){
            // alert(result.msg);
            dispatch({type : "showAlert", message : result.msg})
        }else{
            dispatch({type : "showAlert", message : result.msg})
            console.log(result.error);
        }
    }
    
    return(
        <div className={`row border ${style.PropertyCard}`}>
            <div className="col-12 col-lg-6 col-sm-12">
                <img className = {`rounded img-thumbnail ${style.propertyImage}`}  src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            </div>
            <div className="col-12 col-lg-3 col-sm-6">
                <p>{property.area}, {property.city}, {property.state}</p>
                <p>{property.noOfRoom} Rooms, Hall, {property.noOfBath} Bathrooms</p>
                <p>1345 sqft | Rs : {property.price}</p>
                <p>{property.description}</p>
            </div>
            <div className="col-12 col-lg-3 col-sm-6">
                <p>{saleStatus}</p>
                <p>{property.wishlistCount} people wishlisted</p>
                
                {edit ? 
                <div className="row">
                    <button className={`col btn btn-outline-primary ${style.button}`} onClick={handleEdit}>Edit</button>
                    <button className={`col btn btn-outline-danger ${style.button}`} onClick={handleDelete}>Delete</button>
                </div>
                :
                <div className="row">
                    <button className={`col btn btn-outline-primary ${style.button}`} onClick={handleWishlist}>Wishlist</button>
                    <button className={`col btn btn-primary ${style.button}`} onClick={handleContactAgent} >Contact Agent</button>
                </div>
                }
            </div>
        </div>
    )
}

export default PropertyCard