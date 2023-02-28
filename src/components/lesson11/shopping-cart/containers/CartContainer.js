import React from 'react'

import Cart from '../components/Cart'

const CartContainer = () => {
  const products = []
  const total = 0
  const checkout = () => undefined

  return (
      <Cart
          products={products}
          total={total}
          onCheckoutClicked={() => checkout(products)} />
  )
}

export default CartContainer
