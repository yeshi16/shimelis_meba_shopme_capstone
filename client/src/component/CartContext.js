// import React, {createContext, useState, useEffect, Children} from "react";

// const CartContext = createContext()

// function CartProvider ({children}) {
//     const [incart, setIncart] = useState([])



//     useEffect(() => {
//         const fetchCart = async () => {
//             const data = await getCartQuantity()
//             // console.log(data)
//             setIncart(data)
//         }

//         fetchCart()

//     }, [])

//     const getCartQuantity = async () => {
//         try {
//             const response = await fetch('http://localhost:4000/cart')
//             const data = await response.json()
//             console.log(data)
//             return data
//         } catch (err) {
//             console.log('Error fetching cart')
//         }
//     }

//     return(
//         <CartContext.Provider value={{incart, setIncart}} >
//             {children}
//         </CartContext.Provider>
//     )
// }

// export {CartProvider, CartContext}

import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [incart, setIncart] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch('http://localhost:4000/cartss');
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const data = await response.json();
                setIncart(data);
            } catch (err) {
                console.error('Error fetching cart items:', err);
            }
        };

        fetchCartItems();
    }, []);

    return (
        <CartContext.Provider value={{ incart, setIncart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };



