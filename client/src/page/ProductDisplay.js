import React from "react";
import CartItem from "../page/CartItem";

function ProductDisplay({product}){

    return(
       
        <div className="card backgroundContainer" style={{width: "27rem", height: '45rem'}}>
        <img src={product.images[0]} className="card-img-top" alt={product.title} style={{height: '30rem'}}/>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">${product.price}</p>
          <a href="#" className="btn">
          <CartItem title={product.title} price={product.price} thumbnail={product.thumbnail} description={product.description} />
          </a>
        </div>
      </div>
    )
}

export default ProductDisplay