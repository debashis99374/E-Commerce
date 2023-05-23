import {useState,useEffect,useContext} from "react"
import { BookContext } from "../context/bookContext"

export default function PaymentPage(){
    const {data,dispatch,loading}=useContext(BookContext)
    const [renderDelayed,setRenderDelayed]=useState(false)
    useEffect(()=>{
        const timeout=setTimeout(()=>{
        setRenderDelayed(true)
        },1000)
        return ()=>clearTimeout(timeout)
    })
    if(loading||!renderDelayed){
        return <>Loading...</>
    }
    const preFinalPrice=data.addToCart.reduce((a,b)=>(a+b.price*b.qnty),0)
    let finalPrice=data.addToCart.length>=1?preFinalPrice+49:0
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
        <div>
            <h2>Payment Page</h2>
<div className="container-discount">
    <h4>Apply Coupons</h4>
           <input type="radio" value="5%" name="dis" onChange={(e)=>dispatch({type:"discount%",payLoad:e.target.value})}/> 5% <br/>
           <input type="radio" value="15%" name="dis" onChange={(e)=>dispatch({type:"discount%",payLoad:e.target.value})}/>15% <br/>
           <input type="radio" value="50%" name="dis" onChange={(e)=>dispatch({type:"discount%",payLoad:e.target.value})}/>Lut Lo
            </div>
            <p>Cart value: {preFinalPrice}$</p>
             {data.addToCart.length>=1?(<p>Delivery charges:- 49$</p>):(<></>)}
           {data.discount==="5%"?(<p>5% coupon applied</p>):data.discount==="15%"?(<p>15% coupon applied</p>):data.discount==="50%"?(<p>Lut Lo coupon applied</p>):(<></>)}
           <p>Total:- {finalPrice}$</p>
        </div>
    )
}