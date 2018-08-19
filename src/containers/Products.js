import React, { Component } from 'react';
import { withRouter } from 'react-router'

import Product from '../components/Product/Product';

import classes from './Products.css';

class Products extends Component {
    state = {
        products: [
            {
                id: '1',
                price: 100.53,
                name: 'Product 1 Name',
                desc: 'Product 1 Description',
                created: '08-08-2008'
            },
            {
                id: '2',
                price: 90.25,
                name: 'Product 2 Name',
                desc: 'Product 2 Description',
                created: '12-12-2012'
            },
            {
                id: '3',
                price: 70.05,
                name: 'Product 3 Name',
                desc: 'Product 3 Description',
                created: '13-08-2018'
            },
            {
                id: '4',
                price: 55.05,
                name: 'Product 4 Name',
                desc: 'Product 4 Description',
                created: '14-08-2018'
            },
            {
                id: '5',
                price: 42.04,
                name: 'Product 5 Name',
                desc: 'Product 5 Description',
                created: '18-08-2018'
            }
        ]
    };
    removeProduct = ( id ) => {
        const newProducts = this.state.products.filter(product => product.id !== id)
        this.setState({
            products: newProducts
        })
    };

    // editProductHandler handles actual input changes in the Product Edit form
    editProductPriceHandler = ( event, id ) => {
        const productsCopy = {...this.state.products}
        const productIndex = this.state.products.findIndex(product => product.id === id)
        const productCopy = {...this.state.products[productIndex]}
        console.log(productCopy)
        productCopy.price = event.target.value;
        productsCopy[productIndex] = productCopy;
        this.state({products: productsCopy})
    }

    editProductClick = ( id ) => {
        const state = this.state;
        this.props.history.push({pathname: '/products/' + id + '/edit', state: {...state}})
    }

    selectProduct = (id) => {
        const state = this.state;
        this.props.history.push({pathname: '/products/' + id, state: {...state}})
    }

    render () {
        return (
            <div className={classes.Cards}>
                {this.state.products.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        editable={false}
                        showProductRemoveButton={true}
                        showProductEditButton={true}
                        removeClickHandler={this.removeProduct}
                        productClickHandler={this.selectProduct}
                        editClickHandler={this.editProductClick}
                    />
                ))}
            </div>
        )
    }

}

export default withRouter(Products);