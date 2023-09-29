import { Link, Switch, Route } from 'react-router-dom';
import { Container } from './components/StyledComponents.jsx';
import Home from './components/Home/Home.jsx';
import ProductSearchPage from './components/ProductSearchPage/ProductSearchPage.jsx';
import ProductDataForm from './components/ProductDataForm/ProductDataForm.jsx'
import { createContext, useEffect, useState } from 'react';
import getProducts from './apis/getProducts.js';

export const AppData = createContext(null)

function App() {
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

  const onCreateNewProduct = () => {
    fetchProductList();
  }


  const handleSearch = (searchTerm) => {
    searchTerm = searchTerm.toLowerCase();

    const result = data.filter((product) => {
      return product.productName.toLowerCase().includes(searchTerm) || product.productDescription.toLowerCase().includes(searchTerm)
    })

    setFilterredData(result)
  }

  return (
    <>
      <AppData.Provider value={{
        productList: data,
        isLoaded: isLoaded,
        filterredProductList: filterredData,
        handleSearch: handleSearch,
        onCreateNewProduct
      }}>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/create-product">Create New Product</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact>
            <Home isLoaded={isLoaded} productList={data} />
          </Route>
          <Route path="/search" exact>
            <ProductSearchPage isLoaded={isLoaded} onSearch={handleSearch} productList={filterredData} />
          </Route>
          <Route path="/create-product" exact>
            <Container>
              <ProductDataForm onNewProduct={onCreateNewProduct} />
            </Container>
          </Route>
        </Switch>

      </AppData.Provider>
    </>
  )
}

export default App
