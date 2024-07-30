import React from "react"
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Style.css'

function NavHome() {

    return (
        <>
            <nav className="navbar ">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">
                        <img src="../images/ShopMe_logo.jpg" alt="Logo" width="70" height="50" className="d-inline-block align-text-center" />
                        ShopMe
                    </Link>
                    <Link className="navbar-brand" to="/register">Register/ Login</Link>

                </div>

            </nav>
            <div className="navDiv">
                <p className="text-center navText">
                    Welcome to ShopMe, your one-stop online store for all your needs!
                    From makeup and clothing to food, appliances, and much more,
                    we offer a wide variety of products to cater to every aspect of your life.
                    Enjoy a seamless shopping experience with top-quality items and
                    unbeatable deals, all at the click of a button. Shop smart, shop
                    everything, shop at ShopMe!
                </p>
            </div>
            
        </>
    )
}

export default NavHome