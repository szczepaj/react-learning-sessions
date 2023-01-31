import React, {useState, useEffect} from 'react'

//Component did mount
export const ComponentDidMount = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log("Mounting phase");
    }, []);

    return <button onClick={() => setValue(value + 1)}>{value}</button>;
};