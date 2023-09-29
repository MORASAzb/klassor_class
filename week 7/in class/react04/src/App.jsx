import styled from 'styled-components';
import ProductDataForm from './components/ProductDataForm/ProductDataForm';
import ProductList from './components/ProductList/ProductList';
import { useEffect, useState } from 'react';
import getProducts from './apis/getProducts';


const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 2rem;

  @media all and (max-width: 768px) {
    max-width: auto;
    width: 100%;
    padding: 0 2rem;
  }
`


function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [data, setData] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetchProductList()
  }, [])

  const fetchProductList = () => {
    getProducts().then((data) => {
      setData(data);
      setIsLoaded(true)
    })
  }
  function filterProduct(event) {
    setFilter(event.target.value)

    
    

  }

  return (
    <>
      <Container>
        <input type="text" value={filter}  onChange={filterProduct} />
        <ProductList productList={data} isLoaded={isLoaded} filter={filter}/>
        <ProductDataForm onCreateProduct={fetchProductList} />
      </Container>
    </>
  )
}

export default App
