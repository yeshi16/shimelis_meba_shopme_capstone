import {Link} from 'react-router-dom'
import { useContext } from 'react'
import Context from './Context'

function Nav() {
    const userData = useContext(Context)
    return(
        <div>
            <Link to='/'>
                <div>Home</div>
            </Link>
            <Link to='/products'>
                <div>Products</div>
            </Link>
            <Link to='/user'>
                <div>User</div>
            </Link>
            <Link to='/contact'>
                <div>Contact Us</div>
            </Link>
            <Link to='/cart'>
                <div>Cart: {userData.cartItems}</div>
            </Link>
        </div>
    )
}

export default Nav