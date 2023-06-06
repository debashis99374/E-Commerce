import { useContext,useState,useEffect } from "react"

import { toast } from "react-toastify";

import { BookContext } from "../context/bookContext"
import './cssFiles/wishlist.css'

export default function Wishlist(){
    const {data,dispatch,loading}=useContext(BookContext)
    const [renderDelayed,setRenderDelayed]=useState(false)
    useEffect(()=>{
        const timeout=setTimeout(()=>{
        setRenderDelayed(true)
        },1000)
        return ()=>clearTimeout(timeout)
    })
    if(loading||!renderDelayed){
        return <><iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></>
    }
    const filteredArr=data.allBooks.filter(el=>el.isWishList)
    const filterArrforCart=data.allBooks.filter(el=>el.isCart)
    return(
        <>
        {filteredArr.length<=0?(<h1>Add Something...</h1>):(<>
            {filteredArr.map(el=>(
            <li><div className="container-wishlist">
            <img src={el.image} width="200px"/>
            <h4>{el.title}</h4>
            <p> {el.price}$</p>
            <div className="container-wishlist-bttn">
            <button onClick={()=>{dispatch({type:"wishlistToggle",payLoad:el._id});toast(" Item removed from wishlist") }}>Remove From wishlist</button>
            {filterArrforCart.includes(el)?(<button onClick={()=>{dispatch({type:"moveToCart",payLoad:el._id});toast("Increased Quantity in Cart")}}>Cart++</button>):(<button onClick={()=>{dispatch({type:"addToCart",payLoad:el._id});toast("Added to cart")}}>Add To Cart</button>)}
            
            
            </div>
            </div></li>
        ))}
        </>)}
        
        </>
    )
}
