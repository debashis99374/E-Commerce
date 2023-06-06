import { useContext } from "react";
import LogOut from "./logout";
import { BookContext } from "../context/bookContext";
import { useNavigate } from "react-router-dom";



export default function Profilepage(){
    const {data,dispatch}=useContext(BookContext)
    const navigate=useNavigate()
    return(
        <div>
            <div id="logoutbttn">
                <LogOut/>
            </div>
            <div className="container-address">
                {data.addresses.map(el=>(
                    <li>
                        <p>State:{el.state}</p>
                        <p>City:{el.city}</p>
                        <p>Street:{el.street}</p>
                        <p>Zip:{el.zip}</p>
                    </li>
                )
                   
                )}
                <button onClick={()=>navigate('/address')}>Add+</button>
            </div>
        </div>
    )
}