import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

import Product from '../components/Product/Product';

import * as actions from '../store/action';

import classes from './Products.css';

class Products extends Component {

    selectProduct = (id) => {
        const state = this.props;
        this.props.history.push({pathname: '/products/' + id, state: {...state}})
    }

    render () {
        console.log(this.props);
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
                    />
                ))}
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