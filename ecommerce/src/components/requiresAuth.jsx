import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../context/authContext";


export function RequiresAuth({ children }) {
  let location = useLocation();
  const {token}=useAuth()
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
