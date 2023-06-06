import {useParams,useNavigate} from 'react-router-dom'
import { useContext,useEffect,useState } from 'react'
import { BookContext } from '../context/bookContext'
import './cssFiles/pDetails.css';

import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";



export default function ProductDetails(){
    const {productId}=useParams()
    const {data,dispatch,loading,alertForCart,setAlertForCart,alertForWishList,setAlertForWishList}=useContext(BookContext)
    const navigate=useNavigate()
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
          <button onClick={()=>{dispatch({type:"addToCart",payLoad:obj._id}); setAlertForCart(true); setTimeout(()=>{setAlertForCart(false)},1000); }}>Add To Cart</button>
         </>)}
         
         {obj.isWishList?(<>
                    <span onClick={()=>{dispatch({type:"wishlistToggle",payLoad:obj._id}); setAlertForWishList(true); setTimeout(()=>{
                      setAlertForWishList(false)
                    },1000)}}><span className='wishlist-bttn added heartBttn-wishlist'><AiFillHeart/></span></span>
                    </>):(<>
                    <span onClick={()=>{dispatch({type:"wishlistToggle",payLoad:obj._id});setAlertForWishList(true); setTimeout(()=>{
                      setAlertForWishList(false)
                    },1000)}}><span className='wishlist-bttn heartBttn-wishlist  '><AiOutlineHeart/></span></span>
                    </>)
                   
                    }
                    
                   {alertForWishList?(<div className="sliding-alert">
                  {obj.isWishList?(<>Item Added to Wishlist</>):(<>Removed from Wishlist</>)}

                </div>):(<></>)}
                {alertForCart?(<div className='sliding-alert'>Added To Cart</div>):(<></>)}
                  
       </div>)}
      
      
        </>
    )
}