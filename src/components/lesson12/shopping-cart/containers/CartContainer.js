import React from 'react'

import Cart from '../components/Cart'
import {useDispatch, useSelector} from "react-redux";
import {checkoutAction} from "../redux/products.slice";
import api from '../api/shop'
import {getCartData} from "../redux/selectors";

const CartContainer = () => {
  const dispatch = useDispatch()
  const {total, products, cart } = useSelector(getCartData)
  const checkout = () => {
    api.buyProducts(cart).then(() => {
      dispatch(checkoutAction())
    })
  }

  return (
      <Cart
          products={products}
          total={total}
          onCheckoutClicked={() => checkout(products)} />
  )
}

export default CartContainer
