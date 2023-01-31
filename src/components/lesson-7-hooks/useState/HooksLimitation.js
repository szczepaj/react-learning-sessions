// ❌ Zwróci błąd
import { useState } from 'react'

export const Hookscondition= () => {
    const isLoggedIn = false
    // if (isLoggedIn) {
    //     const [username, setUsername] = useState("");
    // }

    return <div>Hello world</div>
};

// ✅ Tak należy wykorzystywać hooki
const App = () => {
    const [username, setUsername] = useState("");
};