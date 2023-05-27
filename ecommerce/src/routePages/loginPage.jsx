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
         <h2>Authentication Form</h2>
      <form >
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
        
          
          required
        /><br/><br/>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          
          
          required
        /><br/><br/>

        <input type="submit" value="Login" />
      </form>

            <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
        </div>
    )
}