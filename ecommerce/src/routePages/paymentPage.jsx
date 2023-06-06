import {useState,useEffect,useContext} from "react"
import { BookContext } from "../context/bookContext"
import './cssFiles/paymentPage.css'
import { useNavigate } from "react-router-dom"

export default function PaymentPage(){
    const {data,dispatch,loading}=useContext(BookContext)
    const [renderDelayed,setRenderDelayed]=useState(false)
    const navigate=useNavigate()
    useEffect(()=>{
        const timeout=setTimeout(()=>{
        setRenderDelayed(true)
        },1000)
        return ()=>clearTimeout(timeout)
    })
    if(loading||!renderDelayed){
        return <><iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></>
    }
    const filterArr=data.allBooks.filter(el=>el.isCart===true)
    const preFinalPrice=filterArr.reduce((a,b)=>(a+b.price*b.qnty),0)
    let finalPrice=filterArr.length>=1?preFinalPrice+49:0
if(data.discount==="5%"){
    finalPrice=finalPrice-(finalPrice*5)/100
}
else if(data.discount==="15%"){
    finalPrice=finalPrice-(finalPrice*15)/100
}
else if(data.discount==="50%"){
    finalPrice=finalPrice-(finalPrice*50)/100
}

   
    return(
      <div className="payment-page">
      <h2>Payment Page</h2>
        <div class="payment-container">
        
        <div class="container-discount">
          <h4>Apply Coupons</h4>
          <div class="coupon-options">
            <label>
              <input type="radio" value="5%" name="dis" onChange={(e) => dispatch({type: 'discount%', payLoad: e.target.value})} />
              5%
            </label>
            <label>
              <input type="radio" value="15%" name="dis" onChange={(e) => dispatch({type: 'discount%', payLoad: e.target.value})} />
              15%
            </label>
            <label>
              <input type="radio" value="50%" name="dis" onChange={(e) => dispatch({type: 'discount%', payLoad: e.target.value})}/>
              Lut Lo
            </label>
          </div>
        </div>
        <p>Cart value: {preFinalPrice}$</p>
        {filterArr.length >= 1 ? (<p>Delivery charges: - 49$</p>) : (<></>)}
        {data.discount === "5%" ? (<p className="discount-text">5% coupon applied</p>) : data.discount === "15%" ? (<p className="discount-text">15% coupon applied</p>) : data.discount === "50%" ? (<p className="discount-text">Lut Lo coupon applied</p>) : (<></>)}
        <p>Total: - {finalPrice}$</p>
      </div>

      <div id="container-address-paymentPage">

        {data.addresses.map(el=>(
          <li>
            <input type="radio" name="selectAddress"/>{el.zip},{el.street},{el.city},{el.state}
          </li>
        ))}

      </div>
      ,<button id="order-bttn" onClick={()=>navigate("/orderSuccesPage")}>Order</button>
      </div>)
}