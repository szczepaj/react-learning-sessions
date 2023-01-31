import React, { useEffect } from 'react'

export const ComponentWillUmount = () => {
    useEffect(() => {
        console.log("Mounting phase");

        return () => {
            console.log("Unmounting phase");
        };
    }, []);

    return <div>it's me</div>;
};