import React, {useEffect} from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import api from '../api/shop'
import {useDispatch} from "react-redux";
import {getProductsAction} from "../redux/actions";

const ShoppingCartApp = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        api.getProducts().then(products => dispatch(getProductsAction(products)))
    }, [])
    return (
        <div>
            <h2>Shopping Cart Example</h2>
            <br/>
            <ProductsContainer />
            <br/>
            <CartContainer />
        </div>
    )
}

export default ShoppingCartApp
