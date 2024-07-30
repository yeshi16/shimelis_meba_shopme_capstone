import React, {useEffect, useState} from "react";
// import { useContext } from "react";
// import Context from "./Context";
// import {CartContext} from './CartContext'
import CartDisplay from "../page/CartDisplay";

function Cart() {

    // const cartData = useContext(Context)
    // const {cartData} = useContext(CartContext)
    // const { incart } = useContext(CartContext);
    
    // cartItem from database 
    const [incart, setIncart] = useState([])
    
    useEffect(() => {
        const fetchCart = async() => {
            const data = await getCart()
            console.log(data)
            setIncart(data)
        }

        fetchCart()

    }, [])

    const getCart = async () => {
        try {
            const response = await fetch('http://localhost:4000/cart')
            const data = await response.json()
            console.log(data)
            return data
        } catch (err) {
            console.log('Error fetching cart')
        }
    }

    return (
        <div>
      
        <h1>Cart Items</h1>
        {/* <p>Cart Items: {cartData.cartItems}</p> */}
        {/* <p>Cart Items: {cartData.quantity}</p> */}
               
        {
            incart.map((cartItem) => (
                <CartDisplay key={cartItem._id} title={cartItem.title} price={cartItem.price} thumbnail={cartItem.thumbnail} quantity={cartItem.quantity}/>
            ))

        }
        
        </div>
    )
}

export default Cart



