import React from "react";
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../page/Home'
import Nav from "./Nav";
import Product from "./Product";
import User from "./User";
import Cart from "./Cart"
import ProductDisplay from "../page/ProductDisplay";
import Contact from "../page/Contact";
import Register from "../page/Register"
import Footer from "../page/Footer";

import 'bootstrap/dist/js/bootstrap.bundle.min';


function ReactRoutes() {

    // the nav is not going to show on home page
    const location = useLocation();
    const showNav = location.pathname !== '/';

    return (
        <div>

            {showNav && <Nav />}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Product />} />
                <Route path='/products/:id' element={<ProductDisplay />} />
                <Route path='/user' element={<User />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/register' element={<Register />} />
                
            </Routes>
            <Footer/>

        </div>
    )
}

export default ReactRoutes