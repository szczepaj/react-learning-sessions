import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0

  return (
    <div>
      <h3>Your Cart</h3>
      <div>
          {hasProducts && products.map(product =>
              <Product
                  title={product.title}
                  price={product.price}
                  quantity={product.quantity}
                  key={product.id}
              />
          )}
          {!hasProducts &&  <em>Please add some products to cart.</em>
          }
      </div>
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
