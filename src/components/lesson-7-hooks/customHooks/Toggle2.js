// ComponentA.jsx
import { useToggle } from "path/to/hooks/useToggle.js";

const ComponentA = () => {
    const { isOpen, open, close } = useToggle();

    return (
        <>
            <button onClick={open}>Open modal</button>
            <ModalA isOpen={isOpen} onClose={close} />
        </>
    );
};

// ComponentB.jsx
import { useToggle } from "path/to/hooks/useToggle.js";

const ComponentB = () => {
    const { isOpen, open, close } = useToggle();

    return (
        <>
            <button onClick={open}>Open modal</button>
            <ModalB isOpen={isOpen} onClose={close} />
        </>
    );
};