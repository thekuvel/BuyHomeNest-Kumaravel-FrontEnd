import { jwtDecode } from "jwt-decode";
import { createProperty, updateProperty } from "../apiCalls/propertiesAPI.js";
import style from "./PostForm.module.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

function PostForm({property,editPost}){

    let jwtToken = localStorage.getItem("token");
    let token = jwtDecode(jwtToken);    
    
    let [formValue, setFormValue] =  useState({});

    let stateValue = useSelector( state => state.alertReducer)
    let dispatch = useDispatch();
    

    function handleChange(e){
        
        setFormValue({
            ...formValue,
            [e.target.name] : e.target.value,
        }
        )
    }

    async function handleSubmit(e){
        e.preventDefault();
        console.log(formValue);
        let result = await createProperty({...formValue, ownerEmail : token.userEmail, ownerId : token._id})
        if(result.code == 1){
            dispatch({type : "showAlert", message : result.msg})
            setFormValue({})
        }else{
            // alert(result.msg);
            dispatch({type : "showAlert", message : result.msg})
        }
    }

    async function handleUpdate(){
        console.log(formValue);
        let result = await updateProperty({...formValue, ownerEmail : token.userEmail, ownerId : token._id});
        if(result.code == 1){
            // alert(result.msg);
            dispatch({type : "showAlert", message : result.msg})
        }else{
            // alert(result.msg);
            dispatch({type : "showAlert", message : result.msg})
            console.log(result.error);
            
        }
    }

    useEffect(()=>{
        if(property){
            console.log(property);
            
            setFormValue(property);   
        }
    },[property])

    return(
        
        <form onSubmit={handleSubmit} className={style.postForm}>
            
            <div className="row">
                <div className="col-12 col-lg-4 mb-3">
                    <label htmlFor="area" className="form-label">Area</label>
                    <input type="text" className="form-control" name="area" id="area" aria-describedby="areaHelp" onChange={handleChange} value={formValue.area || ""}/>
                    <div id="areaHelp" className="form-text">Enter property area.</div>
                </div>
                <div className="col-12 col-lg-4 mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" name="city" id="city" aria-describedby="cityHelp" onChange={handleChange} value={formValue.city || ""}/>
                    <div id="cityHelp" className="form-text">Enter property city.</div>
                </div>
                <div className="col-12 col-lg-4 mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <input type="text" className="form-control" name="state" id="state" aria-describedby="stateHelp" onChange={handleChange} value={formValue.state || ""}/>
                    <div id="stateHelp" className="form-text">Enter property state.</div>
                </div>
                <div className="col-12 col-lg-4 mb-3">
                    <label htmlFor="noOfRoom" className="form-label">Number of Rooms</label>
                    <input type="text" className="form-control" name="noOfRoom" id="noOfRoom" aria-describedby="noOfRoomHelp" onChange={handleChange} value={formValue.noOfRoom || ""}/>
                    <div id="noOfRoomHelp" className="form-text">Enter number of Rooms.</div>
                </div>
                <div className="col-12 col-lg-4 mb-3">
                    <label htmlFor="noOfBath" className="form-label">Number of Baths</label>
                    <input type="text" className="form-control" name="noOfBath" id="noOfBath" aria-describedby="noOfBathHelp" onChange={handleChange} value={formValue.noOfBath || ""}/>
                    <div id="noOfBathHelp" className="form-text">Enter number of Baths.</div>
                </div>
                <div className="col-12 col-lg-4 mb-3">
                    <label htmlFor="description" className="form-label">Property description</label>
                    <input type="text" className="form-control" name="description" id="description" aria-describedby="descriptionHelp" onChange={handleChange} value={formValue.description || ""}/>
                    <div id="descriptionHelp" className="form-text">Enter property description.</div>
                </div>
                <div className="col-12 col-lg-4 mb-3">
                    <label htmlFor="size" className="form-label">Property size</label>
                    <input type="text" className="form-control" name="size" id="size" aria-describedby="sizeHelp" onChange={handleChange} value={formValue.size || ""}/>
                    <div id="sizeHelp" className="form-text">Enter property build up size in square feet.</div>
                </div>
                <div className="col-12 col-lg-4 mb-3">
                    <label htmlFor="price" className="form-label">Property price</label>
                    <input type="text" className="form-control" name="price" id="price" aria-describedby="priceHelp" onChange={handleChange} value={formValue.price || ""}/>
                    <div id="priceHelp" className="form-text">Enter expected maximum price.</div>
                </div>
                <div className="col-12 col-lg-4 mb-3">
                    <label htmlFor="minPrice" className="form-label">Property minimum price</label>
                    <input type="text" className="form-control" name="minPrice" id="minPrice" aria-describedby="minPriceHelp" onChange={handleChange} value={formValue.minPrice || ""}/>
                    <div id="minPriceHelp" className="form-text">Enter minimum price you are expecting.</div>
                </div>
                <div className="col-12 col-lg-4 mb-3">
                    <label htmlFor="isSold" className="form-label">Property sold out?</label>
                    <select className="form-control"  name="isSold" id="isSold" aria-label="Default select example" aria-describedby="isSoldHelp" onChange={handleChange} value={formValue.isSold || "false"}>
                        <option >Select</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                        
                    </select>
                    <div id="isSoldHelp" className="form-text">Yes - Sold out || No - Available for sale</div>
                </div>
            </div>
            
            {editPost ?
            <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
            :
            <button type="submit" className="btn btn-primary">Create</button>
            }
        </form>
    )
    
}

export default PostForm