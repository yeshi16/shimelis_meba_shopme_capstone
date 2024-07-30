import { Link } from 'react-router-dom'
// import { useContext } from 'react'
// import Context from './Context'
// import { CartContext } from './CartContext';

function Nav() {
    // const cartData = useContext(Context)
    // const { incart } = useContext(CartContext);
    return (
        // <div>
        //     {/* <Link to='/'>
        //         <div>Home</div>
        //     </Link> */}
        //     <Link to='/products'>
        //         <div>Products</div>
        //     </Link>
        //     <Link to='/contact'>
        //         <div>Contact Us</div>
        //     </Link>
        //     <Link to='/cart'>
        //         <div>Cart</div>
        //     </Link>
        //     {/* <Link to='/cart'>
        //         <div>Cart: {incart.length}</div>
        //     </Link> */}
        //     {/* <Link to='/cart'>
        //         <div>Cart: {cartData.cartItems}</div>
        //     </Link> */}

        // </div>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">
                    <img src="../images/ShopMe_logo.jpg" alt="Logo" width="70" height="50" className="d-inline-block align-text-center" />
                    ShopMe
                </Link>
                
                {/* <Link to='/'>
                 <div>Home</div>
                </Link> */}
                <Link className="navbar-brand" to='/products'>
                    <div>Products</div>
                </Link>
                <Link className="navbar-brand" to='/contact'>
                    <div>Contact Us</div>
                </Link>
                <Link className="navbar-brand" to='/cart'>
                    <div>Cart</div>
                </Link>

            </div>

        </nav>
    )
}

export default Nav