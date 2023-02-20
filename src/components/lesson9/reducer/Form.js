import React, {useReducer, useState} from 'react'
import {formReducer} from "./formReducer";

const initialState = {
    name: 'Jakub',
    age: 28
}


export const Form = () => {
    const [state, dispatch] = useReducer(formReducer, initialState)


    const handleIncrementClick = () => dispatch({
            type: 'increment_age'
        })

    const handleDecrementClick = () => dispatch({
            type: 'decrement_age'
        })

    const handleInputChange = (e) => dispatch({
            type: 'name_change',
            name: e.target.value
        })

    return (
        <>
            <input
                value={state.name}
                onChange={handleInputChange}
            />
            <button onClick={handleIncrementClick}>
                Increment age
            </button>
            <button onClick={handleDecrementClick}>
                Decrement age
            </button>
            <p>Hello, {state.name}. You are {state.age}.</p>
        </>
    );
}