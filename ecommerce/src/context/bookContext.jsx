import {createContext,useState,useEffect,useReducer} from 'react'
export const BookContext=createContext()

export function BookProvider({ children }) {
  const [loading,setLoading]=useState(true)
    
    const  fetchProductData=async()=> {
        try {
          const response = await fetch("/api/products");
          const dat = await response.json();
          dispatch({type:"initial",payLoad:dat.products})
          setLoading(false)
        } catch (error) {
          console.error(error);
          
        }
      }
  
    useEffect(() => {
      
       
          fetchProductData();
       
      
    }, []);

    const initialAcc={
    allBooks:[],
    addToCart:[],
    
    searchInput:"",
    sortP:"",
    filterCook:false,
    filterPrograme:false,
    filterPolitics:false,
    rating:0,
    count:1,
    }
    const reducerFun=(state,action)=>{
      switch(action.type){
        //all books array
        case "initial":
          return {...state,allBooks:action.payLoad}
          //filters and sorting functions
          case "sortPrice":
            return {...state,sortP:action.payLoad}
            case "filterCook":
              return {...state,filterCook:action.payLoad}
              case "filterPrograme":
                return {...state,filterPrograme:action.payLoad}
                case "filterPolitics":
                  return {...state,filterPolitics:action.payLoad}
                  case "ratingSlider":
                    return{...state,rating:action.payLoad}
                    //clear all filters,sorting etc.
                    case "clearAllFilters":
                      return {...state,sortP:"",filterCook:false,filterPrograme:false,filterPolitics:false,rating:0,searchInput:""}
//search
            case "searchInput":
              return{...state,searchInput:action.payLoad}

//allBooks


//addToCart
  case "addToCart":
    const index1=state.allBooks.findIndex(el=>el._id===action.payLoad)
    const newObj1={...state.allBooks[index1],isCart:true}   
    const copyOfAllBooks1=[...state.allBooks]    
    copyOfAllBooks1[index1]=newObj1
    const copyOfAddtoCart1=[...state.addToCart,newObj1]
    
    return {...state,allBooks:copyOfAllBooks1,addToCart:copyOfAddtoCart1}


    //toggleWishlist(add&remove)& move to cart
    case "wishlistToggle":
      const index2=state.allBooks.findIndex(el=>el._id===action.payLoad)
      const newObj2={...state.allBooks[index2],isWishList:!state.allBooks[index2].isWishList}
     const  copyOfAllBooks2=[...state.allBooks]
     copyOfAllBooks2[index2]=newObj2
     

     return {...state,allBooks:copyOfAllBooks2}
//here im taking index7 this code should be down below in order to read structurly.but im placing it here so that both watchlist functions align 

     case "moveToCart":
      const index7=state.allBooks.findIndex(el=>el._id===action.payLoad)
      const newObj7={...state.allBooks[index7],isWishList:false}
      const copyOfAllBooks7=[...state.allBooks]
      copyOfAllBooks7[index7]=newObj7

      const newObj8={...state.addToCart[index7],qnty:state.addToCart[index7].qnty+1}
      const copyOfAddToCart6=[...state.addToCart]
      copyOfAddToCart6[index7]=newObj8


      return {...state,allBooks:copyOfAllBooks7,addToCart:copyOfAddToCart6}

      
    //Cart


    //Remove from cart
    case "removeFromCart":
      const index3=state.addToCart.findIndex(el=>el._id===action.payLoad)
      const copyOfAddToCart2=[...state.addToCart]
      copyOfAddToCart2.splice(index3,1)
      const newObj3={...state.allBooks[index3],isCart:false}
      const copyOfAllBooks3=[...state.allBooks]
       copyOfAllBooks3[index3]=newObj3
      return {...state,allBooks:copyOfAllBooks3,addToCart:copyOfAddToCart2}

      
//Remove from Cart,addTo wish list,Change state in allbooks
   case "moveToWishList":
    const index4=state.addToCart.findIndex(el=>el._id===action.payLoad)
    const copyOfAddToCart3=[...state.addToCart]
    copyOfAddToCart3.splice(index4,1)
    const newObj4={...state.allBooks[index4],isCart:false,isWishList:true}
    const copyOfAllBooks4=[...state.allBooks]
    copyOfAllBooks4[index4]=newObj4


    return {...state,allBooks:copyOfAllBooks4,addToCart:copyOfAddToCart3}

   //qnty increase in cart
   case "increaseBttn":
    const index5=state.addToCart.findIndex(el=>el._id===action.payLoad)
    const newObj5={...state.addToCart[index5],qnty:state.addToCart[index5].qnty+1}
    const copyOfAddToCart4=[...state.addToCart]
       copyOfAddToCart4[index5]=newObj5

       return{...state,addToCart:copyOfAddToCart4}

       case "decreaseBttn":
        const index6=state.addToCart.findIndex(el=>el._id===action.payLoad)
    const newObj6={...state.addToCart[index6],qnty:state.addToCart[index6].qnty-1}
    const copyOfAddToCart5=[...state.addToCart]
       copyOfAddToCart5[index6]=newObj6

       return{...state,addToCart:copyOfAddToCart5}

    
      
                      default:
                        return state
      }
    }


    const [data,dispatch]=useReducer(reducerFun,initialAcc)
  
    return (
      <BookContext.Provider value={{data,dispatch,loading}}>
        {children}
      </BookContext.Provider>
    );
  }
  
  
  
  
  
  
  