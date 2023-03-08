import React from 'react'

import Cart from '../components/Cart'
import {useDispatch, useSelector} from "react-redux";
import {checkoutAction} from "../redux/products.slice";
import api from '../api/shop'
import {selectCartData} from "../redux/selectors";
import {productsCheckout} from "../redux/thunk";

const CartContainer = () => {
  const dispatch = useDispatch()
  const {total, products, cart } = useSelector(selectCartData)
  const checkout = () => dispatch(productsCheckout(cart))

  return (
      <Cart
          products={products}
          total={total}
          onCheckoutClicked={() => checkout(products)} />
  )
}

export default CartContainer
