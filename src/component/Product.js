import { useEffect, useState } from "react";


function Product() {

    const [products, setProducts] = useState([])

    const getProducts = async () => {

        try{
            const url = 'https://dummyjson.com/products'
            const response = await fetch(url)
            const data = await response.json()
            // console.log(data.products)
            setProducts(data.products)
        } catch(err){
            console.log("fetch error")
        }
    }

    useEffect(()=>{
        getProducts()
    }, [])

    return (
        <h1>product</h1>
    )
}

export default Product