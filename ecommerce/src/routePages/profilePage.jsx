import { useContext } from "react";
import LogOut from "./logout";
import { BookContext } from "../context/bookContext";
import { useNavigate } from "react-router-dom";
import './cssFiles/profile.css'



export default function Profilepage(){
    const {data,dispatch}=useContext(BookContext)
    const navigate=useNavigate()
    return(
        <div>
            <div id="logoutbttn-div">
                <LogOut/>
            </div>
            <div className="container-address">
                {data.addresses.map(el=>(
                    <li>
                        <p><span className="container-address-highlight">State:</span>{el.state}</p>
                        <p><span className="container-address-highlight">City:</span>{el.city}</p>
                        <p><span className="container-address-highlight">Street:</span>{el.street}</p>
                        <p><span className="container-address-highlight">Zip:</span>{el.zip}</p>
                    </li>
                )
                   
                )}
                <button onClick={()=>navigate('/address')}>Add+</button>
            </div>
        </div>
    )
}