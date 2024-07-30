import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductDisplay from "../page/ProductDisplay";
import SearchInput from "../page/SearchInput";
import CartItem from "../page/CartItem";


function Product() {

    // states for product fetched and search word
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('');
  

    const getProducts = async (searchWord) => {

        try {
            let url = ``
            const baseUrl = 'https://dummyjson.com/productsssss'

            // if there is a search word use search url to fetch
            if (searchWord) {
                url = `${baseUrl}/search?q=${searchWord}`
            } else {
                url = baseUrl
            }
            const response = await fetch(url)
            const data = await response.json()
            // console.log(data.products)
            setProducts(data.products)
        } catch (err) {
            console.log("fetch error")
        }
    }

    //getProducts has empty string at first to fetch products for the searchword props
    useEffect(() => {
        getProducts('')
    }, [])

    const clearSearch = () => {
        setSearch('');
        getProducts('');
        window.scrollTo(0,0)

    };
     
   

    return (
        <div>
            <h1>Products</h1>

            <SearchInput search={search} setSearch={setSearch} getProducts={getProducts} />
            {products.map((product) => (
                <div key={product.id}>
                    <ProductDisplay product={product} />
                    <CartItem title={product.title} price={product.price} thumbnail={product.thumbnail} />
                </div>
            ))}

            {products.length > 0 && (
                <Link to='/products' onClick={clearSearch}>
                    <h1>Keep shopping</h1>
                </Link>
            )}
        </div>

    )
}

export default Product