import { useContext } from "react"
import { BookContext } from "./context/bookContext"
export default function JJJ(){
    const {bookList}=useContext(BookContext)
    return(
        <>
        {bookList.map(el=>(
            <li><img src={el.image} width="100px"/></li>
        ))}
        </>
    )
}