import { createContext, useState,useContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
 
  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));
  const [token, setToken] = useState(localStorageToken?.token);
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);
  const [isloggedIn,setIsLoggedIn]=useState(false)
  const getLoginInformation = async (email,password) => await axios.post('/api/auth/login', {
    email,
    password
});
const createUser = async (firstName, lastName, email,password) => await axios.post('/api/auth/signup', {
  email,
  password,
  firstName,
  lastName
});

  const loginHandler = async (email, password) => {
    try {
      const {
        status,
        data: { foundUser, encodedToken },
      } = await getLoginInformation(email, password);
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        setCurrentUser(foundUser);
        setToken(encodedToken);
        setIsLoggedIn(true)
       
      }
    } catch (err) {
     
    }
  };
  const signUpHandler = async (firstName, lastName, email, password) => {
    try {
      const {
        status,
        data: { createdUser, encodedToken },
      } = await createUser(firstName, lastName, email, password);
       
      if (status === 201 || status === 200) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ token: encodedToken, user: createdUser })
        );
        setCurrentUser(createdUser);
        setToken(encodedToken);
        setIsLoggedIn(true)
        
      }
    } catch (err) {
        alert(`Email Already Exist`);
    }
  };
  const logoutHandler = () => {
    localStorage.removeItem("loginDetails");
    setToken(null);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{loginHandler, token, currentUser ,signUpHandler,logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
