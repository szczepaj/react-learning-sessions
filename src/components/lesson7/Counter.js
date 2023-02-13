import React, {useEffect, useState} from "react";
import {HideMe} from "./HideMe";
import {useCounter} from "./useCounter";

export const Counter = ({ name }) => {
    const [isElementVisible, setElementVisibility] = useState(true)
    const {count, increment, decrement} = useCounter(isElementVisible)

    const hideElement = () => setElementVisibility(false)

    return (
        <div>
            <h1>Hello {name}</h1>
            {count}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={hideElement}>Hide div</button>
            {isElementVisible && <HideMe/>}
        </div>
    )
}

