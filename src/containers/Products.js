import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Product from '../components/Product/Product';

import * as actions from '../store/action';

import classes from './Products.css';

class Products extends Component {

    findProduct = ( id ) => {
        const state = this.props;
        const product = state.products.find(product => product.id === id);
        return product;
    };

    selectProduct = ( id ) => {
        const product = this.findProduct(id);
        this.props.history.push({pathname: '/products/' + id, product: {...product}})
    };

    editProductClick = ( id ) => {
        const product = this.findProduct(id);
        this.props.history.push({pathname: '/products/' + id + '/edit', product: {...product}})
    };

    navigateToAddProd = () => this.props.history.push({pathname: '/products/add'})

    render () {
        return (
            <div className={classes.Cards}>
                {this.props.products.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        editable={false}
                        showProductRemoveButton={true}
                        showProductEditButton={true}
                        removeClickHandler={() => this.props.removeProduct(product.id)}
                        productClickHandler={this.selectProduct}
                        editClickHandler={this.editProductClick}
                        enableClick={true}
                    />
                ))}
                <br/>
                <button className={classes.buttonAdd} onClick={this.navigateToAddProd}>Press to add new product</button>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        products: state.products
    };
}

const mapDispatchToProps = dispatch => {
    return {
        removeProduct: ( id ) => dispatch(actions.removeProd(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Products));