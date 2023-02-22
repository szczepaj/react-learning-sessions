import React, { Suspense} from 'react'
import {Link, useParams, useLocation, Navigate } from "react-router-dom";
import {getProductById} from "./productsApi";

const Product = () => {
    const { id } = useParams()
    const product = getProductById(Number(id))
    const location = useLocation()
    const backLink = location?.state?.redirectFrom ?? '/product-list'
    console.log(location)
    // TODO: what if there's no product?

    if(!product) {
        return <Navigate to={backLink} />
    }

    return (
        <Suspense fallback={<div>Loading time...</div>}>
            <div>
                <Link to={backLink}>Back to products</Link>
                <h1>{product.title}</h1>
                <img src={product.thumbnail}/>
            </div>
        </Suspense>
    )
}

export default Product