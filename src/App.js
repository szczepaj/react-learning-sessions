import React, {Component, useState} from 'react'
import './App.css';
import {Bored} from "./components/lesson8/BoredApp/Bored";
import { MyContext } from './components/lesson8/MyContext'
import {CalculateFactorial} from "./components/lesson8/Factorial";
import {Planet} from "./components/lesson8/Planet";


const App = () => {
    const [name, setName] = useState('')

      return (
        <div className="App">
            {/*<MyContext.Provider value={{foo: 'bar'}}>*/}
            {/*    <Bored/>*/}
            {/*</MyContext.Provider>*/}
            {/*<CalculateFactorial />*/}
            <input type="text" onChange={evt => setName(evt.target.value)}  value={name}/>
            <Planet name={name}/>
        </div>
      );
}

export default App;
