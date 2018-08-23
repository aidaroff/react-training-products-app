import * as actionTypes from './actionTypes';

const initialState = {
    products: [
        {
            id: '1',
            price: 100.53,
            name: 'Product 1 Name',
            desc: 'Product 1 Description',
            created: '08-08-2008'
        },
        {
            id: '2',
            price: 90.25,
            name: 'Product 2 Name',
            desc: 'Product 2 Description',
            created: '12-12-2012'
        },
        {
            id: '3',
            price: 70.05,
            name: 'Product 3 Name',
            desc: 'Product 3 Description',
            created: '13-08-2018'
        },
        {
            id: '4',
            price: 55.05,
            name: 'Product 4 Name',
            desc: 'Product 4 Description',
            created: '14-08-2018'
        },
        {
            id: '5',
            price: 42.04,
            name: 'Product 5 Name',
            desc: 'Product 5 Description',
            created: '18-08-2018'
        }
    ]
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REMOVEPRODUCT:
            const newProducts = state.products.filter(product => product.id !== action.productId)
            return {
                products: newProducts
            }

        case actionTypes.EDITPRODUCT:
            const productId = action.productId;
            const newProperties = action.newProperties;
            const productsCopy = {...state.products};
            const productIndex = state.products.findIndex(product => product.id === productId)
            const productCopy = {...state.products[productIndex], ...newProperties};
            console.log('printing copied product: ', productCopy);
            productsCopy[productIndex] = productCopy;
            return {
                products: productsCopy
            }

    }
    return state;
};

export default reducer;