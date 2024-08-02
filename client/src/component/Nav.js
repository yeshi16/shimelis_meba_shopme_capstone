import { Link } from 'react-router-dom'

function Nav() {
    
    return (
        
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/products">
                    <img src="../images/ShopMe_logo.jpg" alt="Logo" width="70" height="50" className="d-inline-block align-text-center" />
                    ShopMe
                </Link>
              
                <Link className="navbar-brand" to='/products'>
                    <div>Products</div>
                </Link>
                <Link className="navbar-brand" to='/contact'>
                    <div>Contact Us</div>
                </Link>
                <Link className="navbar-brand" to='/cart'>
                    <div>Cart</div>
                </Link>
                <Link className="navbar-brand" to='/register'>
                    <div>Logout</div>
                </Link>

            </div>

        </nav>
    )
}

export default Nav