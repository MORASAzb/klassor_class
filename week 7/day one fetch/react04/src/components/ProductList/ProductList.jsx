import React, { useEffect, useState } from 'react'
import getProducts from '../../apis/getProducts';
import Product from "./Product/Product.jsx"
import styled from 'styled-components'
import { ProductRow } from '../StyledComponents.jsx';

const ProductList = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [data, setData] = useState([])
    const [filter, setFilter] = useState("")


    useEffect(() => {
        getProducts().then((data) => {
            setData(data);
            setIsLoaded(true)
        })
    }, [])

    if (isLoaded === false) {
        return <div>loading</div>
    }

    return (
        <>
        <input type="text" onc />
        <ProductRow >
           {
                data.map((product, index) => (
                    <div key={index}>
                    <Product product={product} />
  
                    </div>
                ))
            }
            </ProductRow>
        </>
    )
}

export default ProductList