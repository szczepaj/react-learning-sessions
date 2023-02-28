import React from 'react'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

const ProductsContainer = () => {
  const products = []
  const addToCart = () => undefined
  return (
      <ProductsList title="Products">
        {products.map(product =>
            <ProductItem
                key={product.id}
                product={product}
                onAddToCartClicked={() => addToCart(product.id)} />
        )}
      </ProductsList>
  )
}

export default ProductsContainer
