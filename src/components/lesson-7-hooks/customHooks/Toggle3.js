// src/hooks/useToggle.js
export const useToggle = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen(isOpen => !isOpen);

    return { isOpen, open, close, toggle };
};

// MyComponent.jsx
import { useToggle } from "path/to/hooks/useToggle.js";

const MyComponent = () => {
    const { isOpen, open, close } = useToggle(true);

    return (
        <>
            <button onClick={open}>Open modal</button>
            <Modal isOpen={isOpen} onClose={close} />
        </>
    );
};