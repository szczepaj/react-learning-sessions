import React, {useEffect, useMemo, useState} from 'react'
import {getProducts} from "./productsApi";
import {Link, useLocation, useSearchParams} from 'react-router-dom'

export const ProductList = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const parsedParams = useMemo(() => Object.fromEntries([...searchParams]), [searchParams])
    const [products, setProducts] = useState([])
    const [brand, setBrand] = useState(parsedParams?.brand || '')
    const [name, setName] = useState(parsedParams?.name || '')
    const [category, setCategory] = useState(parsedParams?.category || '')
    const location = useLocation()



    useEffect(() => {
        getProducts().then(res => setProducts(res.products))
    },[])

    const displayProducts = products.filter(product => {
        const productTitle = product.title.toLowerCase()
        const productCategory = product.category.toLowerCase()
        const productBrand = product.brand.toLowerCase()

        return productTitle.includes(name.toLowerCase()) && productCategory.includes(category.toLowerCase()) && productBrand.includes(brand.toLowerCase())
    })

    const handleNameInput = e => {
        const name = e.target.value
        setName(name)
        setSearchParams({ ...parsedParams, name })
    }

    const handleBrandInput = e => {
        const brand = e.target.value
        setBrand(brand)
        setSearchParams({ ...parsedParams, brand })
    }

    const handleCategoryInput = e => {
        const category = e.target.value
        setCategory(category)
        setSearchParams({ ...parsedParams, category })
    }


    return (
        <div>
            <div>
                <label htmlFor={'name'}>Name</label>
                <input type={'text'} id={'name'} value={name} onChange={handleNameInput} />
                <label htmlFor={'brand'}>Brand</label>
                <input type={'text'} id={'brand'} value={brand} onChange={handleBrandInput} />
                <label htmlFor={'category'}>Category</label>
                <input type={'text'} id={'category'} value={category} onChange={handleCategoryInput}/>
            </div>
            <ul>
                {displayProducts.map( product => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`} state={{ redirectFrom: location }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20}}>
                                <img width={100} src={product.thumbnail} />
                                <span>{product.title}</span>
                                <span><b>Category:</b> {product.category}</span>
                                <span><b>Brand:</b> {product.brand}</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}