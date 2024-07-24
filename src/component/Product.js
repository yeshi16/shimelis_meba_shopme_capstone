import { useEffect, useState } from "react";
import ProductDisplay from "../page/ProductDisplay";


function Product() {

    const [products, setProducts] = useState([])

    const getProducts = async () => {

        try {
            const url = 'https://dummyjson.com/products'
            const response = await fetch(url)
            const data = await response.json()
            console.log(data.products)
            setProducts(data.products)
        } catch (err) {
            console.log("fetch error")
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <h1>Products</h1>
            {products.map((product) => (
                <div key={product.id}>
                     <ProductDisplay  product={product}/>
                </div>
            ))}

        </div>

    )
}

export default Product