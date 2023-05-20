import { useContext } from "react"
import { BookContext } from "../context/bookContext"
import {Link} from "react-router-dom"
export default function Cart(){
    const {data,dispatch}=useContext(BookContext)

    const totalPrice=data.addToCart.reduce((a,b)=>(a+b.price*b.qnty),0)
    
    return(
        <>
        <h4>Items :- {data.addToCart.length}</h4>
        <h4>Total Price :- {totalPrice}</h4>
        
        {data.addToCart.map(el=>(
            <li>
                <div className="container-cart">
                <img src={el.image} width="200px"/>
                <div className="container-count cart">
                    {el.qnty<=1?(<>
                    <button disabled>-</button>
                    </>):(<>
                    <button onClick={()=>dispatch({type:"decreaseBttn",payLoad:el._id})}>-</button>
                    </>)} {el.qnty}
                    <button onClick={()=>dispatch({type:"increaseBttn",payLoad:el._id})}>+</button>
                </div>
                
                <h4>{el.title}</h4>
                <p>Price:- {el.price*el.qnty}$ </p>
                <button onClick={()=>dispatch({type:"removeFromCart",payLoad:el._id})}>Remove From Cart</button>
                <button onClick={()=>dispatch({type:"moveToWishList",payLoad:el._id})}>Move To WishList</button>
                </div>

            </li>
        ))}

        <Link to='/paymentPage'>
        <button>Proceed To Payment</button>
        </Link>

        
        </>
    )
}