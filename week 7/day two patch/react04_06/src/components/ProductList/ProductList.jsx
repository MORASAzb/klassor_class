import PropTypes from 'prop-types'
import deletePr from '../../apis/deleteProduct.js'
import { Link, Switch, Route } from 'react-router-dom';

const ProductList = ({ isLoaded, productList ,onCreateNewProduct}) => {

    if (isLoaded === false) {
        return <div>loading</div>
    }

    function deletepr(event) {
        alert(event.target.value)
        deletePr(event.target.value).then(() => {
            onCreateNewProduct();
          })
    }

    

    return (
        <>
            <div key ={Math.random(0,1500)}>{
                productList.map(product => (
                    <>
                        <pre key={product._id}>
                            {
                                JSON.stringify(product, null, 2)
                            }
                            <button value={product._id} onClick={deletepr}>delete</button>
                            <Link to={`/products/edit/${product._id}`}>Edit Product</Link>
                        </pre>
                    </>
                ))
            }</div>
        </>
    )
}

const ProductListShape = PropTypes.shape({
    "productName": PropTypes.string.isRequired,
    "productSKU": PropTypes.string.isRequired,
    "productCount": PropTypes.string.isRequired,
    "productBrand": PropTypes.string.isRequired,
    "productPrice": PropTypes.string.isRequired,
    "productCategory": PropTypes.string.isRequired,
    "productDescription": PropTypes.string.isRequired,
    "_id": PropTypes.number.isRequired
})

ProductList.propTypes = {
    productList: PropTypes.arrayOf(ProductListShape).isRequired,
    isLoaded: PropTypes.bool.isRequired
}

export default ProductList