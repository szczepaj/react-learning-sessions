export const getCartData = state => {
    console.log(state)
    const { cart, products } = state
    const cartProducts = cart.map(id => products.find(product => product.id === id))
    const total = cartProducts.reduce((prev, curr) => {
        return prev + curr.price
    }, 0)

    return {
        products: cartProducts,
        total: total.toFixed(2),
        cart
    }
}