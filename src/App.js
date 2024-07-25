import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from './component/Home'
import Nav from "./component/Nav";
import Product from "./component/Product";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Product/>} />
      </Routes>
    </div>
  );
}

export default App;
