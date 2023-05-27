import { useContext } from "react"
import { BookContext } from "../context/bookContext"
import {Link} from "react-router-dom"
import './cssFiles/cart.css'


export default function Cart(){
    const {data,dispatch}=useContext(BookContext)
    const filterArr=data.allBooks.filter(el=>el.isCart===true)

   const totalPrice=filterArr.reduce((a,b)=>(a+b.price*b.qnty),0)
    
    return(
        <>
        {filterArr.length<=0?(<h1>Add Something...</h1>):(<>
            <h4>Items :- {filterArr.length}</h4>
        <h4>Total Price :- {totalPrice}$</h4>
        
        {filterArr.map(el=>(
            <li>
                <div className="container-cart">
                <img src={el.image} width="200px"/>
                <div className="container-cart-count">
                    {el.qnty<=1?(<>
                    <button disabled>-</button>
                    </>):(<>
                    <button onClick={()=>dispatch({type:"decreaseBttn",payLoad:el._id})}>-</button>
                    </>)} {el.qnty}
                    <button onClick={()=>dispatch({type:"increaseBttn",payLoad:el._id})}>+</button>
                </div>
                
                <h4>{el.title}</h4>
                <p> {el.price*el.qnty}$ </p>
                <div className="container-cart-bttn">
                <button onClick={()=>{dispatch({type:"removeFromCart",payLoad:el._id});}}>Remove From Cart</button>
                <button onClick={()=>dispatch({type:"moveToWishList",payLoad:el._id})}>Move To WishList</button></div>
                </div>

            </li>
        ))}

        <Link to='/payment'>
        <button id="proceed-to-payment-bttn">Proceed To Payment</button>
        </Link>
        </>)}
        

        
        </>
    )
}