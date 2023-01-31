import React, { useState, useEffect } from "react";

export const BasicExample = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${value} times`;
    });

    useEffect(() => {
        console.log('Hello world')
    }, [])

    return (
        <div>
            <p>You clicked {value} times</p>
            <button onClick={() => setValue(value + 1)}>Click me</button>
        </div>
    );
};