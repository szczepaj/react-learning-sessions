import React, {useEffect, useState} from 'react'

//Component did update
export const ComponentDidUpdate = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log(value);
        console.log("Updating phase");
    }, [value]);

    return <button onClick={() => setValue(value + 1)}>{value}</button>;
};