import {useContext,useEffect,useState} from 'react'
import { BookContext } from '../context/bookContext'
import {useNavigate,Link} from 'react-router-dom'
export default function Politics(){
    const {data,dispatch,loading}=useContext(BookContext)
    const navigate=useNavigate()
    const [renderDelayed,setRenderDelayed]=useState(false)
    useEffect(()=>{
        const timeout=setTimeout(()=>{
            setRenderDelayed(true)
        },1000)
        return ()=>clearTimeout(timeout)
    },[])
    if(loading||!renderDelayed){
        return <div>Loading...</div>
    }
    //initial array
    let filteredArr=data.allBooks.filter(el=>el.category==="Politics")
//sort by price 
    if(data.sortP==="l-h"){
        filteredArr=filteredArr.sort((a,b)=>(a.price-b.price))
    }else if (data.sortP==="h-l"){
        filteredArr=filteredArr.sort((a,b)=>(b.price-a.price))
    }
   
//rating slider
if(data.rating){
    filteredArr=filteredArr.filter(el=>el.ratings>=data.rating)
}  
if(data.searchInput){
    filteredArr=filteredArr.filter(el=>el.title.toLowerCase().includes(data.searchInput.toLowerCase()))
} 
//clear all filters and sort
  const clearFilterHandler=()=>{
    dispatch({ type: 'clearAllFilters' });

    const checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]'));
  const radioButtons = Array.from(document.querySelectorAll('input[type=radio]'));

  checkboxes.reduce((_, el) => {
    el.checked = false;
  }, null);

  radioButtons.reduce((_, el) => {
    el.checked = false;
  }, null);
  }
    return (
        <>
        <button onClick={clearFilterHandler}>Clear</button>
        <fieldset>
            <legend>Sort Price</legend>
            <input type="radio" value="l-h" name="sort" onChange={(e)=>dispatch({type:"sortPrice",payLoad:e.target.value})} /> Low-High
            <input type="radio" value="h-l" name="sort" onChange={(e)=>dispatch({type:"sortPrice",payLoad:e.target.value})}/> High-Low
        </fieldset>
        ,
        <input type="range" value={data.rating} max="5"
          min="0"
          step="1" onChange={(e)=>dispatch({type:"ratingSlider",payLoad:e.target.value})} /> {data.rating}
        {filteredArr.map(el=>(
            <li style={{listStyle:"none"}} key={el._id}>
                <div className="container allP">
                   <Link to={`/product/${el._id}`}> <img src={el.image} width="100px"/>
                    <h4>{el.title}</h4></Link>
                    <p>Author -{el.author}</p>
                    <p>Price -{el.price}$</p>
                    <p>Ratings :- {el.ratings}</p>
                    {el.isCart?(<>
                    <button onClick={()=>navigate('/cart')} >Go To Cart</button>
                    </>):(<>
                    <button onClick={()=>dispatch({type:"addToCart",payLoad:el._id})}>Add To Cart</button>
                    </>)}
                    {el.isWishList?(<>
                    <button onClick={()=>dispatch({type:"wishlistToggle",payLoad:el._id})}>added</button>
                    </>):(<>
                    <button onClick={()=>dispatch({type:"wishlistToggle",payLoad:el._id})}>add to wishlist</button>
                    </>)}
                    {el.id}
                </div>
            </li>
        ))}
        </>
    )
}