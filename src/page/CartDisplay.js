import React from "react";

function CartDisplay({title, price, thumbnail, quantity}){

    return (

        <div>
            <h4>{title}</h4>
            <img src={thumbnail} alt={title} />
            <h4>${price}</h4>
            <p>Quantity: {quantity}</p>
            <select>
            <label>Quantity</label> 
                <option value='1' selected>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
           </select>
        </div>
    )
}

export default CartDisplay