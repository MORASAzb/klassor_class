import PropTypes from 'prop-types'

const ProductList = ({isLoaded, productList,filter}) => {
    if (isLoaded === false) {
        return <div>loading</div>
    }
    const filteredData = (filter ? [...productList.filter(
        value => value.productName.includes(filter) ||  value.productBrand.includes(filter) 
      )] : productList)
        return(
            filteredData.map(product => (
                <>
                    <pre key={product._id}>
                        {
                            JSON.stringify(product, null, 2)
                        }
                    </pre>
                </>
            ))
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
    productList : PropTypes.arrayOf(ProductListShape).isRequired,
    isLoaded: PropTypes.bool.isRequired,
    filter:PropTypes.string,
}

export default ProductList