import {createSlice} from "@reduxjs/toolkit";
import {getProducts, productsCheckout} from "./thunk";

const initialState = {
    products: [],
    cart: [],
    isPending: false,
    errorMessage: null
}

const handlePendingState = (state, action) => {
    state.isPending = true
}

const handleErrorMessage = (state, action) => {
    state.errorMessage = action.payload
    state.isPending = false
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCartAction(state, action) {
            // state.cart.push(action.payload)
            return {
                ...state,
                cart: state.cart.concat(action.payload)
            }
        }
    },
    extraReducers: {
        [getProducts.pending]: handlePendingState,
        [productsCheckout.pending]: handlePendingState,
        [getProducts.rejected]: handleErrorMessage,
        [productsCheckout.rejected]: handleErrorMessage,
        [getProducts.fulfilled]: (state, action) => {
            // state.products = action.payload
            // state.isPending = false
            return {
                ...state,
                products: action.payload,
                isPending: false
            }
        },
        [productsCheckout.fulfilled]: (state, _action) => {
            state.cart = []
            state.isPending = false
        },
    }
})

export const { getProductsAction, addToCartAction, checkoutAction } = productsSlice.actions
export const productsReducer = productsSlice.reducer