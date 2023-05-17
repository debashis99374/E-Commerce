import {createContext,useState,useEffect,useReducer} from 'react'
export const BookContext=createContext()

export function BookProvider({ children }) {
    
    const  fetchProductData=async()=> {
        try {
          const response = await fetch("/api/products");
          const dat = await response.json();
          dispatch({type:"initial",payLoad:dat.products})
        } catch (error) {
          console.error(error);
          
        }
      }
  
    useEffect(() => {
      
  
      fetchProductData();
    }, []);

    const initialAcc={
    allBooks:[],
    searchInput:"",
    sortP:"",
    filterCook:false,
    filterPrograme:false,
    filterPolitics:false,
    rating:0,
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
                      default:
                        return state
      }
    }


    const [data,dispatch]=useReducer(reducerFun,initialAcc)
  
    return (
      <BookContext.Provider value={{data,dispatch}}>
        {children}
      </BookContext.Provider>
    );
  }
  
  
  
  
  
  
  