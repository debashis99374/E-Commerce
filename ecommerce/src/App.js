import "./App.css";

import Mockman from "mockman-js";
import {Routes,Route} from 'react-router-dom'

import Header from "./header";
import Footer from "./footer";
import Home from "./routePages/home";
import AllProducts from "./routePages/allProduct";
import Cooking from "./routePages/cooking";
import Programming from "./routePages/programming";
import Politics from "./routePages/politics";


function App() {
  return (
    <div className="App">
      <Header/>
     <Routes> 
     
     <Route path="/"element={<Home/>}/>
     <Route path="/allProducts"element={<AllProducts/>}/>
     <Route path="/cooking"element={<Cooking/>}/>
     <Route path="/programming"element={<Programming/>}/>
     <Route path="/politics"element={<Politics/>}/>
     <Route path="/mockman"element={<Mockman/>}/> 
      </Routes>

      <Footer/>
      
    </div>
  );
}

export default App;
