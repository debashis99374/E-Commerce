import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import './cssFiles/profile.css'
export default function LogOut(){
    const {logoutHandler}=useAuth()
    const navigate = useNavigate();
    return(
        <>
        <button id="logoutBttn"  onClick={() => {
            logoutHandler();
            navigate("/login");
          }} >LogOut</button>
          
        </>
    )
}