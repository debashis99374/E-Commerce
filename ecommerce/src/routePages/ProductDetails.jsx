import {useParams} from 'react-router-dom'
import { useContext } from 'react'
import { BookContext } from '../context/bookContext'

export default function ProductDetails(){
    const {productId}=useParams()
    const {data,dispatch}=useContext(BookContext)

    const obj=data.allBooks.find(el=>el._id===productId)
    console.log(obj)
    
    return(
        <>
      
       {obj&&(<>
         {obj.title}
       </>)}
    
        </>
    )
}