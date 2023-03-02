export const Actions = {
    GET_PRODUCTS: 'products/getProducts',
    ADD_TO_CART: 'products/addToCart',
    CHECKOUT: 'cart/checkout'
}

export const getProductsAction = productList => ({
  type: Actions.GET_PRODUCTS,
  payload: productList
})

export const addToCartAction = id => ({
    type: Actions.ADD_TO_CART,
    payload: id
})

export const checkoutAction = () => ({
    type: Actions.CHECKOUT
})