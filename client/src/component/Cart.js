import React, { useEffect, useState } from "react";

import CartDisplay from "../page/CartDisplay";
import { updateCartItem, deleteCartItem } from '../services/getItems'

function Cart() {
    // cartItem from database 
    const [incart, setIncart] = useState([])
    const [quantity, setQuantity] = useState(0)

    // load all cart item 
    useEffect(() => {
        const fetchCart = async () => {
            const data = await getCart()
            // console.log(data)
            setIncart(data)
        }

        fetchCart()

    }, [])

    // fetch cart item
    const getCart = async () => {
        try {
            const response = await fetch('http://localhost:4000/cart')
            const data = await response.json()
            // console.log(data)
            return data
        } catch (err) {
            console.log('Error fetching cart')
        }
    }

    // update quantity 
    const updateQua = (e, id, amount) => {

        e.preventDefault()
        const cartitem = incart.find((item) => item._id === id)
        cartitem.quantity = amount
        // console.log(cartitem, amount)
        updateCartItem(id, cartitem)
            .then(() => {
                // reload window after updated cart item
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
            })

    }

    // change quantity when selected from drop down button 
    // and update cart in DB
    const changeQua = (e, amount, id) => {
        setQuantity(amount)
        // console.log('amount ', amount)
        updateQua(e, id, amount)
    }

    // delete cart item with id
    const handleDelete = async (id) => {
        try {
            await deleteCartItem(id);
            setIncart(incart.filter(item => item._id !== id));
        } catch (error) {
            console.log('Error deleting item:', error);
        }
    };

    return (
        <div style={{ backgroundColor: "#e2fffa" }}>
            <h1 className="display-6 text-center">Cart Items</h1>

            {
                incart.map((cartItem) => (
                    <CartDisplay
                        id={cartItem._id}
                        handleQua={changeQua}
                        updateQua={updateQua}
                        handleDelete={handleDelete} 
                        key={cartItem._id}
                        title={cartItem.title}
                        price={cartItem.price}
                        thumbnail={cartItem.thumbnail}
                        quantity={cartItem.quantity}
                        description={cartItem.description}
                    />
                ))

            }

        </div>
    )
}

export default Cart



