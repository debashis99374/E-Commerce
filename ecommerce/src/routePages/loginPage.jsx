import { useLocation,useNavigate } from "react-router-dom"
import {useState,useContext} from 'react'
import { AuthContext } from "../context/authContext"

export default function Login(){
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate(location?.state?.from?.pathname);
  };
    return(
        <div>
            <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
        </div>
    )
}