import axios from "axios";

export async function updateCartItem(id, newCartItem) {


   try {
        axios.put(`http://localhost:4000/cart/${id}`, newCartItem )
   } catch (error) {
        console.log(error)
   }
}