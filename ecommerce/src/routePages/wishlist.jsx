import { useContext } from "react"

import { BookContext } from "../context/bookContext"

export default function Wishlist(){
    const {data,dispatch}=useContext(BookContext)
    const filteredArr=data.allBooks.filter(el=>el.isWishList)
    return(
        <>
        {filteredArr.map(el=>(
            <li><div className="container-cart">
            <img src={el.image} width="200px"/>
            <h4>{el.title}</h4>
            <p>Price:- {el.price}</p>
            <button onClick={()=>dispatch({type:"wishlistToggle",payLoad:el._id})}>Remove From wishlist</button>
            <button onClick={()=>dispatch({type:"moveToCart",payLoad:el._id})}>Add To Cart</button>
            </div></li>
        ))}
        </>
    )
}