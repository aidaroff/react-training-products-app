import React from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

import Product from '../Product/Product'

const productDetails = ( props ) => {
    const product = props.products.find(product => product.id === props.match.params.id);
    return (
        <div>
            <h1>You're viewing {product.name}</h1>
            <Product product={product} showProductRemoveButton={false}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    };
}

export default withRouter(connect(mapStateToProps, null)(productDetails));
