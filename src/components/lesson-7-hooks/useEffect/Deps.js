import React,{ useState, useEffect} from 'react'

export const Deps = () => {
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);

    // ❌ Źle. ESLint pokaże ostrzeżenie
    useEffect(() => {
        console.log(firstValue + secondValue);
    }, [firstValue]);

    // ✅ Przekazane są wszystkie zależności wykorzystywane wewnątrz efektu
    useEffect(() => {
        console.log(firstValue + secondValue);
    }, [firstValue, secondValue]);

    return (
        <>
            <button onClick={() => setFirstValue(value + 1)}>First: {value}</button>
            <button onClick={() => setSecondValue(value + 1)}>Second: {value}</button>
        </>
    );
};