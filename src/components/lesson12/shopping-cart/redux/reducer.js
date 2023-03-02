import {Actions} from "./actions";

const initialState = {
    products: [],
    cart: []
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case Actions.GET_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case Actions.ADD_TO_CART: {
            return {
                ...state,
                cart: state.cart.concat(action.payload)
            }
        }
        case Actions.CHECKOUT: {
            return {
                ...state,
                cart: []
            }
        }
    }
    return state
}