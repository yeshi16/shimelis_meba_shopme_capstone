import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import Context from "../component/Context";

function Cart(){
    const userData = useContext(Context)
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
        <p>Cart Items: {userData.cartItems}</p>
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

export default Cart

