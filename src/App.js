import React, {Component, useState} from 'react'
import './App.css';
import {Counter} from "./components/lesson7/Counter";


const App = () => {
    const [name, setName] = useState('')

    const handleButton = () => setName('Jakub')

      return (
        <div className="App">
            <Counter name={name} />
            <button onClick={handleButton}>Set my name to Jakub</button>
        </div>
      );
}

export default App;
