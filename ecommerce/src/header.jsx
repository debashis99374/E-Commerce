import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext,useEffect } from 'react'
import { BookContext } from './context/bookContext'
export default function Header(){
    const navigate=useNavigate()
    const {data,dispatch}=useContext(BookContext)
  
  useEffect(()=>{
    if(data.searchInput.length>0){
        navigate("/allProducts")
      }
  },[data.searchInput])
    return(
        <>
        <h4>Books <span>Corner</span></h4>
        <nav>
<NavLink to='/'>Home ||</NavLink>
<NavLink to='/wishlist'>WishList ||</NavLink>
<NavLink to='/cart'>Cart ||</NavLink>
<NavLink>Profile ||</NavLink>
        </nav>
        <input type="search" name='search' className='search-bar' value={data.searchInput} onChange={(e)=>dispatch({type:"searchInput",payLoad:e.target.value})} placeholder='search' />
        </>
    )
}