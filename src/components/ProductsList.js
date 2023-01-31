import React from 'react'
import {Product} from "./Product";

export const ProductsList = props => (
    <div>
        {props.products.map(({ img, name, price, weight, id}) => (
            <Product
                key={`${props.type}-${id}`}
                imgUrl={img}
                name={name}
                price={price}
                weight={weight}
            >
                <span>{name} Z dodatkową informacją</span>
            </Product>
        ))}
    </div>
)