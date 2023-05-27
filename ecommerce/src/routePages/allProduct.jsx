   import {useContext,useEffect,useState} from 'react'
   import { BookContext } from '../context/bookContext'
   import {useNavigate,Link} from 'react-router-dom'

   import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";

   

   import "./cssFiles/allProducts.css"

   export default function AllProducts(){
    const {data,dispatch,loading,alertForCart,setAlertForCart,alertForWishList,setAlertForWishList}=useContext(BookContext)
    const navigate=useNavigate()
    const [renderDelayed, setRenderDelayed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderDelayed(true);
    }, 1000);

    return () => clearTimeout(timeout); 
  }, []);

  if (loading || !renderDelayed) {
    return <iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  }
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
        <div className='container-products'>
       <div className="container-filters">
            <button onClick={clearFilterHandler}>Clear</button>
       
            <div className="container-sort">
              <legend>Sort By Price:-</legend>
            <input type="radio" value="l-h" name="sort" onChange={(e)=>dispatch({type:"sortPrice",payLoad:e.target.value})} /> Low-High <br/>
            <input type="radio" value="h-l" name="sort" onChange={(e)=>dispatch({type:"sortPrice",payLoad:e.target.value})}/> High-Low
            </div>
            <div className="container-filter">
            <legend id='legend1'>Filters:-</legend>
            <input type='checkbox' value="cook" onChange={(e)=>dispatch({type:"filterCook",payLoad:e.target.checked})}/>Cooking <br/>
          <label id='programe-checkBox'>  <input type='checkbox' value="programe"  onChange={(e)=>dispatch({type:"filterPrograme",payLoad:e.target.checked})}/>Programming  </label> <br/>
           <input type='checkbox' value="politics" onChange={(e)=>dispatch({type:"filterPolitics",payLoad:e.target.checked})}/>Politics <br/>
            </div>
          <div className="container-ratings">
           <span id='rating'> Ratings:- </span> <br/>
        <input type="range" value={data.rating} max="5"
          min="0"
          step="1" onChange={(e)=>dispatch({type:"ratingSlider",payLoad:e.target.value})} /> {data.rating} </div></div>
        <div className="container-procuct-page">
        {filteredArr.map(el=>(
            <li style={{listStyle:"none"}} key={el._id}>

             

                <div className="container-pCard">

                 

                  
                   <Link to={`/product/${el._id}`}> <img src={el.image} width="100px" className='img-pCard'/>
                   </Link>
                   <Link to={`/product/${el._id}`}> <h4 className='pcard-h4'>{el.title}</h4></Link>
                    <div className="container-pCard-s">
                    <p>{el.author}</p>
                    <p>{el.price}$</p>
                    <p>{el.ratings}/5</p>
                    </div>
                    <div className="pCard-bttn-cart">
                    {el.isCart?(<>
                    <button className="pCard-bttn-cart" onClick={()=>navigate('/cart')} >Go To Cart</button>
                    </>):(<>
                    <button className="pCard-bttn-cart" onClick={()=>{dispatch({type:"addToCart",payLoad:el._id});setAlertForCart(true) ; setTimeout(() => {
                      setAlertForCart(false)
                    },1000);}}>Add To Cart</button>
                    </>)}
                    </div>
                    
                    {el.isWishList?(<>
                    <span onClick={()=>{dispatch({type:"wishlistToggle",payLoad:el._id}); setAlertForWishList(true); setTimeout(()=>{
                      setAlertForWishList(false)
                    },1000)}}><span className='wishlist-bttn added heartBttn'><AiFillHeart/></span></span>
                    </>):(<>
                    <span onClick={()=>{dispatch({type:"wishlistToggle",payLoad:el._id});setAlertForWishList(true); setTimeout(()=>{
                      setAlertForWishList(false)
                    },1000)}}><span className='wishlist-bttn  heartBttn  '><AiOutlineHeart/></span></span>
                    </>)}
                    
                    
                    </div>
                    
                
                
                {alertForWishList?(<div className="sliding-alert">
                  {el.isWishList?(<>Item Added to Wishlist</>):(<>Removed from Wishlist</>)}

                </div>):(<></>)}
            </li>
        ))}
        {alertForCart && (
  <div className="sliding-alert">
    <p>Added to cart</p>
  </div>
)}

        
        </div>
        
        
        </div>
    )
   }