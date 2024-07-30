import {Link} from 'react-router-dom'
import { useContext } from 'react'
import Context from './Context'
import { CartContext } from './CartContext';

function Nav() {
    // const cartData = useContext(Context)
    const { incart } = useContext(CartContext);
    return(
        <div>
            {/* <Link to='/'>
                <div>Home</div>
            </Link> */}
            <Link to='/products'>
                <div>Products</div>
            </Link>
            <Link to='/contact'>
                <div>Contact Us</div>
            </Link>
            <Link to='/cart'>
                <div>Cart: {incart.length}</div>
            </Link>
            {/* <Link to='/cart'>
                <div>Cart: {cartData.cartItems}</div>
            </Link> */}

        </div>
    )
}

export default Nav