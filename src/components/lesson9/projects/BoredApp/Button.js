import {forwardRef} from "react";

// Przkazywanie referencji dla dziecka

export const Button = forwardRef((props, ref) => {
    return <button ref={ref} onClick={props.onClick}>{props.text}</button>
})