import React from "react";

function ProductDisplay({product}){

    return(
        <div>
            <img src={product.images[0]} alt={product.title}/>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
           
        </div>
    )
}

export default ProductDisplay