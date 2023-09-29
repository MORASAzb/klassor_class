import PropTypes from 'prop-types'
import deletePr from '../../apis/deleteProduct.js'
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
            <div>{
                productList.map(product => (
                    <>
                        <pre key={product._id}>
                            {
                                JSON.stringify(product, null, 2)
                            }
                            <button value={product._id} onClick={deletepr}>delete</button>
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