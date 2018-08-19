import React from 'react';

import classes from './ProductEdit.css'

const productEdit = ( props ) => {
    console.log(props.location)
    const product = props.location.state.products.find(product => product.id === props.match.params.id);
    return (
        <div className={classes.ProductEdit}>
            <h1>You're editing: {product.name}</h1>
            <div>
                <label htmlFor="price">Price: </label>
                <input type="text" id="price" value={product.price}/>
            </div>
            <div>
                <label htmlFor="name"> Name: </label>
                <input type="text" id="name" value={product.name}/>
            </div>
            <div>
                <label htmlFor="desc">Description:</label>
                <textarea type="text" id="desc" rows="10" value={product.desc}></textarea>
            </div>
        </div>
    )
}

export default productEdit;