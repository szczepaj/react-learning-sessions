import React, { useEffect, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const ProductList = lazy(() => import('./ProductList'))
const Product = lazy(() => import('./Product'))

export const ProductApp = () => {

    useEffect(() => {
        // import('../LoginForm/loginApi').then(module => module.loginApi.auth().then(res => console.log(res)))
    }, [])

    return (
        <Routes>
            <Route path={'/product-list'} element={<ProductList/>} />
            <Route path={'/product/:id'} element={<Product /> } />
        </Routes>
    )
}