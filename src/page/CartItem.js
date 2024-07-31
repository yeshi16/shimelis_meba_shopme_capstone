import React from "react";

function CartItem({title, price, thumbnail, description}) {

    // adding items to cart from the product page
    const postCart = async () => {

        const postData = {
            title: title,
            price: price,
            thumbnail: thumbnail,
            description: description,
            quantity:  1
            
        }

        try {
            const response = await fetch('http://localhost:4000/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData)
            })
            const data = await response.json()
            console.log('Item added to cart');
            
        } catch (err) {
            console.log("Error adding item to cart Db")
        }
    }

    const handleSubmit = async (e) =>{

        e.preventDefault()

        await postCart()

    }

     
    return (
        <button type="button" className="btn " onClick={handleSubmit}>Add to Cart</button>
       
    )
}

export default CartItem