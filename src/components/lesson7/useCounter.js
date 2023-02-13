import {useEffect, useState} from "react";

export const useCounter = (isElementVisible) => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(val => val - 1)

    useEffect(() => {
        console.log('count has been changed', count)
    }, [count])

    useEffect(() => {
        console.log('count or visibility changed')
    }, [count, isElementVisible])

    return {
        count,
        increment,
        decrement
    }
}