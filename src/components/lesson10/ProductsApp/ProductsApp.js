import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {ProductList} from "./ProductList";
import {Product} from "./Product";

export const ProductApp = () => {
    return (
        <Routes>
            <Route path={'/product-list'} element={<ProductList/>} />
            <Route path={'/product/:id'} element={<Product /> } />
        </Routes>
    )
}