import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
export default function LogOut(){
    const {logoutHandler}=useAuth()
    const navigate = useNavigate();
    return(
        <>
        <button  onClick={() => {
            logoutHandler();
            navigate("/login");
          }} >LogOut</button>
          
        </>
    )
}