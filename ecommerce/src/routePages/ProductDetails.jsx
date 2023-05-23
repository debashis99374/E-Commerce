import {useParams,useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { BookContext } from '../context/bookContext'
import './cssFiles/pDetails.css';

export default function ProductDetails(){
    const {productId}=useParams()
    const {data,dispatch}=useContext(BookContext)
    const navigate=useNavigate()

    const obj=data.allBooks.find(el=>el._id===productId)
    console.log(obj)
    
    return(
        <>
      
       {obj&&(<div className="pdetails-container">
         <img src={obj.image}/>
         <h4>{obj.title}</h4>
         <div className="pdetails-container-s">
         <p>{obj.author}</p>
         <p>{obj.price}$</p>
         <p>{obj.description}</p>
         </div>
         {obj.isCart?(<>
          <button onClick={()=>navigate('/cart')} >Go To Cart</button>
         </>):(<>
          <button onClick={()=>dispatch({type:"addToCart",payLoad:obj._id})}>Add To Cart</button>
         </>)}
         {obj.isWishList?(<>
                    <button onClick={()=>dispatch({type:"wishlistToggle",payLoad:obj._id})}>added</button>
                    </>):(<>
                    <button onClick={()=>dispatch({type:"wishlistToggle",payLoad:obj._id})}>add to wishlist</button>
                    </>)}
       </div>)}
    
        </>
    )
}