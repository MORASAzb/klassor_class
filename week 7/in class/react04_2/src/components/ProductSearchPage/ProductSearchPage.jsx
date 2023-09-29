import { useEffect, useState } from 'react'
import ProductSearch from '../ProductSearch/ProductSearch'
import ProductList from '../ProductList/ProductList'
import getProducts from '../../apis/getProducts'
import { Container } from '../StyledComponents.jsx'

const ProductSearchPage = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [data, setData] = useState([])
    const [filterredData, setFilterredData] = useState([])

    useEffect(() => {
        fetchProductList()
    }, [])

    const fetchProductList = () => {
        getProducts().then((data) => {
            setData(data);
            setFilterredData(data);
            setIsLoaded(true)
        })
    }


    const handleSearch = (searchTerm) => {
        searchTerm = searchTerm.toLowerCase();

        const result = data.filter((product) => {
            return product.productName.toLowerCase().includes(searchTerm) || product.productDescription.toLowerCase().includes(searchTerm)
        })

        setFilterredData(result)
    }

    return (
        <Container>
            <ProductSearch onSearch={handleSearch} />
            <ProductList productList={filterredData} isLoaded={isLoaded} />
        </Container>
    )
}

export default ProductSearchPage