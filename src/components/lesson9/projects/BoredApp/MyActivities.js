import React, {useContext} from "react";
import {useBoredContext} from "./BoredContext";

// Podpięcie pod kontekst w celu pobrania pojedynczej wartości

export const MyActivities = () => {
    const { myActivities } = useBoredContext()

    return (
            <div>
                {myActivities.map(item => (
                    <div key={item.activity}>{item.activity}</div>
                ))}
            </div>
        )
}