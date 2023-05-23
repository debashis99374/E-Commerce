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
     <Route path="/cart"element={ <Cart/>}/>
     <Route path="/wishlist"element={<RequiresAuth> <Wishlist/></RequiresAuth>}/>
     <Route path="/payment"element={<PaymentPage/>}/>
     <Route path="/product/:productId"element={ <ProductDetails/>}/>
     <Route path="/mockman"element={<Mockman/>}/> 
     
      </Routes>

      
      
    </div>
  );
}

export default App;
