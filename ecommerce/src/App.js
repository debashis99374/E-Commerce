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
import Cart from "./routePages/cart";
import Wishlist from "./routePages/wishlist";
import ProductDetails from "./routePages/ProductDetails";
import PaymentPage from "./routePages/paymentPage";
import Login from "./routePages/loginPage";
import { RequiresAuth } from "./components/requiresAuth";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SignUp from "./routePages/signup";
import Address from "./routePages/addressComponent";
import Profilepage from "./routePages/profilePage";
import Final from "./routePages/finalPage";


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
     <Route path="/login"element={<Login/>}/>
     <Route path="/signup"element={<SignUp/>}/>
     <Route path="/cart"element={ <Cart/>}/>
     <Route path="/wishlist"element={<RequiresAuth> <Wishlist/></RequiresAuth>}/>
     <Route path="/payment"element={<PaymentPage/>}/>
     <Route path="/product/:productId"element={ <ProductDetails/>}/>
     <Route path="/address"element={<Address/>}/>
     <Route path="/orderSuccesPage"element={<Final />}/>
     <Route path="/Profile"element={<Profilepage/>}/>
     <Route path="/mockman"element={<Mockman/>}/> 
     
      </Routes>
      

      <ToastContainer/>
      
    </div>
  );
}

export default App;
