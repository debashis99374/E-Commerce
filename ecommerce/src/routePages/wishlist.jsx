import { useContext } from "react"

import { BookContext } from "../context/bookContext"
import './cssFiles/wishlist.css'

export default function Wishlist(){
    const {data,dispatch}=useContext(BookContext)
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
            <button onClick={()=>dispatch({type:"wishlistToggle",payLoad:el._id})}>Remove From wishlist</button>
            {filterArrforCart.includes(el)?(<button onClick={()=>dispatch({type:"moveToCart",payLoad:el._id})}>Cart++</button>):(<button onClick={()=>dispatch({type:"addToCart",payLoad:el._id})}>Add To Cart</button>)}
            
            
            </div>
            </div></li>
        ))}
        </>)}
        
        </>
    )
}
