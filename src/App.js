import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from './component/Home'
import Nav from "./component/Nav";
import Product from "./component/Product";
import User from "./component/User";
import Cart from "./page/Cart"
import ProductDisplay from "./page/ProductDisplay";
import Context from './component/Context'
import Contact from "./page/Contact";
import Register from "./page/Register"

function App() {
const userInfo = {
  name: 'ms',
  cartItems: 4
}

  return (
    <div className="App">
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
  );
}

export default App;
