const ComponentA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <button onClick={openModal}>Open modal</button>
            <ModalA isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

// ComponentB.jsx
const ComponentB = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <button onClick={openModal}>Open modal</button>
            <ModalB isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};