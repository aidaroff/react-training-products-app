import React from 'react';

import classes from './Product.css';


const product = ( props ) => {
    let button = null;
    if (props.showProductRemoveButton) {
        button = <button onClick={() => props.removeClickHandler(props.product.id)}>Remove</button>
    }
    return (
        <div className={classes.card}>
            <p>
                <b>ID: </b> {props.product.id}
            </p>

            <p>
                <b>Price: </b>{props.product.price}
            </p>

            <p>
                <b>Name: </b>{props.product.name}
            </p>

            <p>
                <b>Description: </b>{props.product.desc}
            </p>

            <p>
                <b>Creation Date: </b>{props.product.created}
            </p>
            {button}
        </div>
    )
}


export default product;