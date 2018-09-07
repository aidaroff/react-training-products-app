import React from 'react';

import classes from './Product.css';


const product = ( props ) => {
    let removeButton = null;
    if (props.showProductRemoveButton) {
        removeButton = <button className={classes.buttonDanger} onClick={props.removeClickHandler}>Remove</button>
    }
    let editButton = null;
    if (props.showProductEditButton) {
        editButton = <button className={classes.buttonWarning} onClick={() => props.editClickHandler(props.product.id)}>Edit</button>
    }
    return (
        <div className={classes.Card}>
            <div onClick={props.enableClick ? () => props.productClickHandler(props.product.id) : null}>
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
            </div>
            <span>
                {removeButton}
            </span>
            <span>
                {editButton}
            </span>
        </div>
    )
}


export default product;