import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from 'react-router-dom'
import { BookContext,BookProvider } from "./context/bookContext";

// Call make Server
makeServer();
export {BookContext};

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
