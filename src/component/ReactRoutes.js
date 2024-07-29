import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Nav from "./Nav";
import Product from "./Product";
import User from "./User";
import Cart from "./Cart"
import ProductDisplay from "../page/ProductDisplay";
import Context from './Context'
import Contact from "../page/Contact";
import Register from "../page/Register"

function ReactRoutes() {
    const userInfo = {
        name: 'ms',
        cartItems: 4
      }

      return (
        <div>
      <Context.Provider value={userInfo}>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Product/>} />
        <Route path='/products/:id' element={<ProductDisplay/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      </Context.Provider>
    </div>
      )
}

export default ReactRoutes