import { useLocation,useNavigate ,NavLink} from "react-router-dom"
import {useState,useContext,useEffect} from 'react'
import { useAuth } from "../context/authContext";

export default function Login(){
  const { loginHandler, token } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
 
  const handleLogin = (e) => {
    e.preventDefault();
    if(password.length < 8){
      alert("Password Have atleast 8 Characters");
    }
    else{
      loginHandler(email,password);
    }
  

  };
  useEffect(() => {
    if (token) {
      navigate(location?.state?.from.pathname || "/", { replace: true });
    }
  }, [token, navigate, location?.state?.from.pathname]);
    return(
        <div>
         <h2>Log In </h2>
      <form onSubmit={handleLogin} >
        <label htmlFor="username">Email:</label>
        <input
          type="text"
          id="username"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        
          
          required
        /><br/><br/>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          
          
          required
        /><br/><br/>
        <p>Don't have an account? <NavLink to='/signup'>SignUp</NavLink></p>

       <button  type="submit">LogIn</button>
      
      </form>

            
        </div>
    )
}