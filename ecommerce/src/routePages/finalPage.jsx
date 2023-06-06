import { useState,useContext,useEffect } from "react"
import { BookContext } from "../context/bookContext"
export default function Final(){
    const {loading}=useContext(BookContext)

    const [renderDelayed,setRenderDelayed]=useState(false)
    useEffect(()=>{
        const timeout=setTimeout(()=>{
        setRenderDelayed(true)
        },3000)
        return ()=>clearTimeout(timeout)
    })
    if(loading||!renderDelayed){
        return <><iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></>
    }
    return(
        <div className="orderSucces">
            <h2>Congratulations:-</h2>
            <h4>you will receve update regarding your order soon on your mail..</h4>
            <h4>Thank you for shopping with us.</h4>
        </div>
    )
}