import {NavLink} from 'react-router-dom'
export default function Header(){
    return(
        <>
        <h4>Books <span>Corner</span></h4>
        <nav>
<NavLink>Home ||</NavLink>
<NavLink>WishList ||</NavLink>
<NavLink>Cart ||</NavLink>
<NavLink>Profile ||</NavLink>
        </nav>
        </>
    )
}