import * as actionTypes from './actionTypes';

export const removeProd = ( id ) => {
    return {type: actionTypes.REMOVEPRODUCT, productId: id};
}

export const editProd = ( id, newProperties ) => {
    return {type: actionTypes.EDITPRODUCT, productId: id, newProperties: newProperties}
}