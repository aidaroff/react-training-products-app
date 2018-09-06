import store from '../index.js';

import * as actionTypes from './actionTypes';

export const removeProd = ( id ) => {
    return {type: actionTypes.REMOVEPRODUCT, productId: id};
}

export const editProd = ( id, newProperties, history ) => {
    const editProdAction = {type: actionTypes.EDITPRODUCT, productId: id, newProperties: newProperties}
    store.dispatch(editProdAction);
    history.push({pathname: '/'})
}

export const addProd = ( newProduct, history ) => {
    const addProdAction = {type: actionTypes.ADDPRODUCT, newProduct: newProduct};
    store.dispatch(addProdAction);
    history.push({pathname: '/'})
}