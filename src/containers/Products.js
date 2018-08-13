import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import Product from '../components/Product/Product';

import classes from './Products.css';

class Products extends Component {

    removeProduct = ( id ) => {
        const newProducts = this.props.products.filter(product => product.id !== id)
        this.setState({
            products: newProducts
        })
    };

    render () {
        return (
            <div>
                {this.props.products.map(product => (
                    <Link key={product.id} to={this.props.history.location.pathname + '/' + product.id}>
                        <Product
                            key={product.id}
                            product={product}
                            showProductRemoveButton={true}
                            removeClickHandler={this.removeProduct}
                        />
                    </Link>
                ))}
            </div>
        )
    }

}

export default withRouter(Products);