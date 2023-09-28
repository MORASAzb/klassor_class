import styled from 'styled-components';
import ProductDataForm from './components/ProductDataForm/ProductDataForm';
import ProductList from './components/ProductList/ProductList';
import { useEffect, useState } from 'react';


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
  const [productList,setProductList]= useState(<ProductList />)






  return (
    <>
      <Container>
        {productList}
        <ProductDataForm setProductList={setProductList} />
      </Container>
    </>
  )
}

export default App
