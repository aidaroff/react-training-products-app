import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import * as actions from '../../store/action';
import classes from './ProductEdit.css';


class ProductEdit extends Component {
    productId = this.props.match.params.id
    product = this.props.location.product || this.props.products.find(product => product.id === this.props.match.params.id);

    newProperties = {
        price: this.product.price,
        name: this.product.name,
        desc: this.product.desc
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

    render () {
        return (
            <div className={classes.ProductEdit}>
                <h1>You're editing: {this.product.name}</h1>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input
                        type="text"
                        id="price"
                        placeholder={this.product.price}
                        onChange={this.updatePrice}/>
                </div>
                <div>
                    <label htmlFor="name"> Name: </label>
                    <input
                        type="text"
                        id="name"
                        placeholder={this.product.name}
                        onChange={this.updateName}/>
                </div>
                <div>
                    <label htmlFor="desc">Description:</label>
                    <textarea
                        type="text"
                        id="desc"
                        rows="10"
                        placeholder={this.product.desc}
                        onChange={this.updateDesc}></textarea>
                </div>
                <div>
                    <button className={classes.buttonSubmit} type="submit" onClick={() => this.props.editProduct(this.productId, this.newProperties, this.props.history) }>Submit the form</button>
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
        editProduct: ( id, newProperties, history ) => actions.editProd(id, newProperties, history),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductEdit));
