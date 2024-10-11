import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import style from "./AlertMessage.module.css"

let AlerMessageCard = () => {

    let dispatch = useDispatch();

    let [display, setDisplay] = useState("d-none")
    let message = useSelector( state => state.alertReducer.message)

    function clearCard(){
        console.log(message);
        setDisplay("d-none");
        dispatch({type : "reset"})
    }
    
    useEffect(()=>{
        if(message !== ""){
            setDisplay("");
        }
        setTimeout(clearCard,5000)
    },[message])
    
    
    return(
        
        <div className={`position-fixed end-0 bg-info m-3 p-1 ${display} `}>
            <p> {message} </p>
        </div>
        
    )

}

export default AlerMessageCard