import { Container } from './components/StyledComponents.jsx';
import ProductList from './components/ProductList/ProductList'
import getProducts from './apis/getProducts'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetchProductList()
}, [])

const fetchProductList = () => {
    getProducts().then((data) => {
        setData(data);
        setIsLoaded(true)
    })
}

  return (
    <>
      <Container>
        HOME page
        <ProductList productList={data} isLoaded={isLoaded}/>
      </Container>
    </>
  )
}

export default App
