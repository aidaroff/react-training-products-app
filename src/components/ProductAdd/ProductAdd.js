import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import * as actions from '../../store/action';
import classes from './ProductAdd.css';


class ProductAdd extends Component {
    newObject = {
        price: 0,
        name: '',
        desc: ''
    }

    updatePrice = (event) => {
        this.newObject.price = event.target.value;
    }

    updateName = (event) => {
        this.newObject.name = event.target.value;
    }

    updateDesc = (event) => {
        this.newObject.desc = event.target.value;
    }

    render () {
        return (
            <div className={classes.ProductAdd}>
                <h1>New Product</h1>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input
                        type="text"
                        id="price"
                        onChange={this.updatePrice}/>
                </div>
                <div>
                    <label htmlFor="name"> Name: </label>
                    <input
                        type="text"
                        id="name"
                        onChange={this.updateName}/>
                </div>
                <div>
                    <label htmlFor="desc">Description:</label>
                    <textarea
                        type="text"
                        id="desc"
                        rows="10"
                        onChange={this.updateDesc}></textarea>
                </div>
                <div>
                    <button className={classes.buttonSubmit} type="submit" onClick={() => this.props.addProduct(this.newObject, this.props.history) }>Add this product</button>
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
        addProduct: ( newObject, history ) => actions.addProd( newObject, history )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductAdd));
