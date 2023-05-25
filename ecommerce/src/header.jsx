import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext,useEffect } from 'react'
import { BookContext } from './context/bookContext'

import { AiOutlineHome,AiOutlineHeart,AiOutlineShoppingCart ,AiOutlineSearch} from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";

export default function Header(){
    const navigate=useNavigate()
    const {data,dispatch}=useContext(BookContext)
    const wishlistLength=data.allBooks.reduce((a,b)=>(b.isWishList?a=a+1:a),0)
  
  useEffect(()=>{
    if(data.searchInput.length>0){
        navigate("/allProducts")
      }
  },[data.searchInput])
    return(
        <div className='header'>
        <h4>Books <span ><span className="header-span1">C</span>orner</span></h4>
        <nav>
<NavLink to='/' className='NavLink' title='Home'><AiOutlineHome/></NavLink>
<NavLink to='/wishlist' className='NavLink ' title='Wishlist'><AiOutlineHeart/><span className='badge'>{wishlistLength<=0?(<></>):(<>{wishlistLength}</>)}</span></NavLink>
<NavLink to='/cart' className='NavLink' title='Cart'><AiOutlineShoppingCart/>{data.addToCart.length<=0?(<></>):(<span className='badge'>{data.addToCart.length}</span>)}</NavLink>
<NavLink className='NavLink' title='Profile'><IoPersonCircleOutline/></NavLink>
        </nav>
        
       <input type="search" name='search' className='search-bar' value={data.searchInput} onChange={(e)=>dispatch({type:"searchInput",payLoad:e.target.value})} placeholder='search' />
        
        
    </div>
    )
}