import React from 'react'
import PropTypes from 'prop-types'

const calculatePricePerKg = (price, weight) => price/weight

export const Product = ({
    imgUrl,
    name,
    weight,
    price,
    children
                        }) => {

    const willMyHeartExplode = price > 20 || weight > 1

    return (
        <div>
            {imgUrl && <img src={imgUrl} alt={name} width="640" />}
            {willMyHeartExplode && (
                <React.Fragment>
                    BYE BYE
                </React.Fragment>
            )}
            <h2>{name}</h2>
            <p>Price: {price}$</p>
            <button type="button">Add to cart</button>
            {children}
        </div>
    )
}

Product.propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string,
    weight: PropTypes.number,
    price: PropTypes.number.isRequired,
    children: PropTypes.node
}
