import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './index.css'
import ProductSearchPage from './components/ProductSearchPage/ProductSearchPage.jsx'
import ProductDataForm from './components/ProductDataForm/ProductDataForm.jsx'
import { Container } from './components/StyledComponents.jsx/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
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
          <App />
        </Route>
        <Route path="/search" exact>
          <ProductSearchPage />
        </Route>
        <Route path="/create-product" exact>
          <Container>
            <ProductDataForm />
          </Container>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
)
