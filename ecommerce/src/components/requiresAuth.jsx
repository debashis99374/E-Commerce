import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/authContext";

export function RequiresAuth({ children }) {
  let location = useLocation();
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
