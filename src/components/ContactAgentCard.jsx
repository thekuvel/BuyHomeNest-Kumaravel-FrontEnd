
import { useNavigate } from "react-router-dom";
import style from "./UserCard.module.css"

let ContactAgentCard = ({contact}) =>{
    let navigate = useNavigate();

    function handleSendMail(){
        console.log("Send Mail");
        navigate(`/email?userEmail=${contact.userEmail}&&propertyId=${contact.propertyId}&&ownerEmail=${contact.ownerEmail}`)
    }

    return (
        <div className={`row ${style.userCard}`}>
            <div className="col-12 col-lg-3 mb-3">
                <input type="text" className="form-control" name="userEmail" id="userEmail" value={contact.userEmail || "userEmail"} disabled/>
            </div>
            <div className="col-12 col-lg-3 mb-3">
                <input type="text" className="form-control" name="userName" id="userName" value={contact.propertyId || "propertyId"} disabled/>
            </div>
            <div className="col-12 col-lg-3 mb-3">
                <input type="text" className="form-control" name="userType" id="userType" value={contact.ownerEmail || "ownerEmail"} disabled/>
            </div>
            <div className="col-12 col-lg-3 mb-3">    
            <button type="button" className={`btn btn-outline-primary ${style.button}`} onClick={handleSendMail}>Send Mail</button>
            </div>
        </div>
    )
}

export default ContactAgentCard