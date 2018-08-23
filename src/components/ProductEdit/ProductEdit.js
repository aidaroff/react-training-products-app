import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/action';
import classes from './ProductEdit.css';


class ProductEdit extends Component {
    newProperties = {
        price: 0,
        name: '',
        desc: ''
    }

    updatePrice = (event) => {
        this.newProperties.price = event.target.value;
    }

    updateName = (event) => {
        this.newProperties.name = event.target.value;
    }

    updateDesc = (event) => {
        this.newProperties.desc = event.target.value;
    }

    productId = this.props.match.params.id
    product = this.props.products.find( product => product.id === this.productId);

    render () {
        return (
            <div className={classes.ProductEdit}>
                <h1>You're editing: {this.product.name}</h1>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input
                        type="text"
                        id="price"
                        value={this.product.price}
                        onChange={(event) => this.updatePrice(event)}/>
                </div>
                <div>
                    <label htmlFor="name"> Name: </label>
                    <input
                        type="text"
                        id="name"
                        value={this.product.name}
                        onChange={(event) => this.updateName(event)}/>
                </div>
                <div>
                    <label htmlFor="desc">Description:</label>
                    <textarea
                        type="text"
                        id="desc"
                        rows="10"
                        value={this.product.desc}
                        onChange={(event) => this.updateDesc(event)}></textarea>
                </div>
                <div>
                    <button type="submit" onClick={() => this.props.editProduct(this.productId, this.newProperties) }>Submit the form</button>
                </div>
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
        editProduct: ( id, newProperties ) => dispatch(actions.editProd(id, newProperties))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);
