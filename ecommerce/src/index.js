import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from 'react-router-dom'
import { BookContext,BookProvider } from "./context/bookContext";
import { AuthContext,AuthProvider } from "./context/authContext";


makeServer();
export {BookContext};
export {AuthContext}

ReactDOM.render(
  
    <Router>
     
    <BookProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
    
    </BookProvider>
   
    </Router>
  
  ,document.getElementById("root")
);
