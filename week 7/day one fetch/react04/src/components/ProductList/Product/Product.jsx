import React, { useEffect, useState } from 'react'
import { CardPrice } from '../../StyledComponents.jsx'
import { CardTitle } from '../../StyledComponents.jsx'
import { CardDescriotion } from '../../StyledComponents.jsx'
import { Row } from '../../StyledComponents.jsx'
const ProductList = (prop) => {


    const product = prop.product

    return (
        <>
                <CardTitle> 
                    {product.productName}
                </CardTitle>
                <CardDescriotion> 
                    {product.productDescription}
                </CardDescriotion>
                <Row> 
                    <CardPrice> 
                        {product.productPrice}
                    </CardPrice>
                    قیمت

                </Row>
                <Row> 
                    <CardPrice> 
                        {product.productBrand}
                    </CardPrice>
                    برند

                </Row>
                <Row> 
                    <CardPrice> 
                        {product.productCount}
                    </CardPrice>
                    موجودی

                </Row>

        </>
    )
}

export default ProductList