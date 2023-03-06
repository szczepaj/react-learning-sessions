import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cart: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProductsAction(state, action) {
            state.products = action.payload
        },
        addToCartAction(state, action) {
            state.cart.push(action.payload)
        },
        checkoutAction(state, action) {
            state.cart = []
        }
    }
})

export const { getProductsAction, addToCartAction, checkoutAction } = productsSlice.actions
export const productsReducer = productsSlice.reducer