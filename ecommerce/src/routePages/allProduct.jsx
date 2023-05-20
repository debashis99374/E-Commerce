   import {useContext} from 'react'
   import { BookContext } from '../context/bookContext'
   import {useNavigate,Link} from 'react-router-dom'

   export default function AllProducts(){
    const {data,dispatch}=useContext(BookContext)
    const navigate=useNavigate()
    //initial array
    let filteredArr=data.allBooks
//sort by price 
    if(data.sortP==="l-h"){
        filteredArr=filteredArr.sort((a,b)=>(a.price-b.price))
    }else if (data.sortP==="h-l"){
        filteredArr=filteredArr.sort((a,b)=>(b.price-a.price))
    }
    //filter by category
    if(data.filterCook){
        filteredArr=filteredArr.filter(el=>el.category==="Cooking")
    }
    if(data.filterPrograme){
        filteredArr=filteredArr.filter(el=>el.category==="Programming")
    }
    if(data.filterPolitics){
        filteredArr=filteredArr.filter(el=>el.category==="Politics")
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



    return(
        <>
        <button onClick={clearFilterHandler}>Clear</button>
        <fieldset>
            <legend>Sort Price</legend>
            <input type="radio" value="l-h" name="sort" onChange={(e)=>dispatch({type:"sortPrice",payLoad:e.target.value})} /> Low-High
            <input type="radio" value="h-l" name="sort" onChange={(e)=>dispatch({type:"sortPrice",payLoad:e.target.value})}/> High-Low
        </fieldset>
        ,<fieldset>
            <legend>Filters:-</legend>
            <input type='checkbox' value="cook" onChange={(e)=>dispatch({type:"filterCook",payLoad:e.target.checked})}/>Cooking
            <input type='checkbox' value="programe" onChange={(e)=>dispatch({type:"filterPrograme",payLoad:e.target.checked})}/>Programming
            <input type='checkbox' value="politics" onChange={(e)=>dispatch({type:"filterPolitics",payLoad:e.target.checked})}/>Politics
        </fieldset>
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