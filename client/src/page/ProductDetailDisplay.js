import React from "react";
import { useParams } from "react-router-dom";

function ProductDetailDisplay() {
    const params = useParams()
    let productData = null

    if(params.id === '143'){
        productData = {
            name: 'Hoodie',
            price: 20.00
        }
    }

    return (
        <>
      
        <h1>Product Detail</h1>
        <p>product id: {params.id}</p>
        {
            productData!= null ?
            <>
            
                <h2>{productData.name} - ${productData.price}</h2>
            </>
            : ''
        }

        </>
    )
}

export default ProductDetailDisplay