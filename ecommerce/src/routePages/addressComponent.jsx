import {useContext,useState} from "react"
import { BookContext } from '../context/bookContext'
import {  toast } from 'react-toastify';

export default function Address(){
    const {data,dispatch}=useContext(BookContext)
    const [address,setAddress]=useState({
        state:"",
        city:"",
        street:"",
        zip:""
    })
    const handleChange=(e)=>{
        setAddress({...address,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch({type:"addAddress",payLoad:address})
        setAddress({ state:"",
        city:"",
        street:"",
        zip:""})
        if(address.state===""||address.city===""||address.street===""||address.zip===""){
            toast("Please Fill All Details")
        }else{
            toast("New Address Added")
        }
        const form = document.getElementById("address-form")
        form.reset()


    }
    
    return(
        <div>
            <form id="address-form"  onSubmit={handleSubmit}>
                <label>
                    STATE:
                    <input type="text" name="state" onChange={handleChange} />
                </label>
                <br/>
                <label>
                    CITY:
                    <input type="text" name="city" onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    STREET:
                    <input type="text" name="street" onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    ZIP:
                    <input type="number" name="zip" onChange={handleChange}/>
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>

           

        </div>
    )
}