// ❌ Dozwolone, ale nie zalecane
const App = () => {
    const [state, setState] = useState({
        username: "",
        todos: [{ text: "Learn hooks" }],
        isModalOpen: false,
    });
};

// ✅ Dobrze
const App = () => {
    const [username, setUsername] = useState("");
    const [todos, setTodos] = useState([{ text: "Learn hooks" }]);
    const [isModalOpen, setIsModalOpen] = useState(false);
};