import { useState } from "react";

export const BasicStateExample = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            {value}
            <button type="button" onClick={() => setValue(value + 1)}>
                Increment value by 1
            </button>
        </div>
    );
};