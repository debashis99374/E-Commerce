import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from 'react-router-dom'
import { BookContext,BookProvider } from "./context/bookContext";
import { AuthContext,AuthProvider } from "./context/authContext";

// Call make Server
makeServer();
export {BookContext};
export {AuthContext}

ReactDOM.render(
  <React.StrictMode>
    <Router>
     
    <BookProvider>
    
    <App />
    
    </BookProvider>
   
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
