import React, {useEffect} from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../redux/thunk";
import {selectPendingState} from "../redux/selectors";

const ShoppingCartApp = () => {
    const dispatch = useDispatch()
    const isPending = useSelector(selectPendingState)

    useEffect(() => {
        dispatch(getProducts())
    }, [])
    return (
        <div>
            <h2>Shopping Cart Example</h2>
            <br/>
            {isPending && <div>Loading ... </div>}
            {!isPending && (
                <>
                    <ProductsContainer />
                    <br/>
                    <CartContainer />
                </>
            )}
        </div>
    )
}

export default ShoppingCartApp
