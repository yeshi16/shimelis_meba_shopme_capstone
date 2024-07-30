import axios from "axios";

export async function updateCartItem(id, newCartItem) {


   try {
        await axios.put(`http://localhost:4000/cart/${id}`, newCartItem )
   } catch (error) {
        console.log(error)
   }
}

export async function deleteCartItem(id){
     try {
         await axios.delete(`http://localhost:4000/cart/${id}`)
     } catch (error) {
          console.log(error)
     }
}