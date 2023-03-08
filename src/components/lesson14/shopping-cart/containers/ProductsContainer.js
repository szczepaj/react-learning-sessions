import React from 'react'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import {useDispatch, useSelector} from "react-redux";
import {addToCartAction} from "../redux/products.slice";
import {selectProducts} from "../redux/selectors";

const ProductsContainer = () => {
    const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const addToCart = id => dispatch(addToCartAction(id))

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
