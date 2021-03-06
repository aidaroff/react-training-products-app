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
            const productsCopy = [...state.products];
            const productIndex = state.products.findIndex(product => product.id === productId)
            const productCopy = {...state.products[productIndex], ...newProperties};

            productsCopy[productIndex] = productCopy;
            const newState = {
                products: productsCopy
            }
            return newState

        case actionTypes.ADDPRODUCT:
            const newProduct = action.newProduct;
            newProduct['id'] = Math.floor(Math.random() * 255);
            const today  = new Date();
            newProduct['created'] = today.toLocaleDateString("en-GB").split('/').join('-')
            const newState1 = {
                products: [...state.products, newProduct]
            }
            return newState1

    }
    return state;
};

export default reducer;