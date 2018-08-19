import React from 'react';
import { withRouter } from 'react-router'

import Product from '../Product/Product'

const productDetails = ( props ) => {
    const product = props.location.state.products.find(product => product.id === props.match.params.id);
    return (
        <div>
            <h1>You're viewing {product.name}</h1>
            <Product product={product} showProductRemoveButton={false}/>
        </div>
    )
}

export default withRouter(productDetails);