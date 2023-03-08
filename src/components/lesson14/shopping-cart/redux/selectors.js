import {createSelector} from "@reduxjs/toolkit";

export const selectProducts = state => state.products
export const selectCart = state => state.cart
export const selectPendingState = state => state.isPending

export const selectCartData = createSelector([selectProducts, selectCart] , (products, cart) => {
    const cartProducts = cart.map(id => products.find(product => product.id === id))
    const total = cartProducts.reduce((prev, curr) => {
        return prev + curr.price
    }, 0)

    return {
        products: cartProducts,
        total: total.toFixed(2),
        cart
    }
})