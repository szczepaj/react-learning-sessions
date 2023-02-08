import React, { Component } from 'react'
import './App.css';
import {BoredApp} from "./components/lesson6/BoredApp/BorderApp";


class App extends Component {
    handleLogin = (state) => {
        console.log(state)
    }

    render() {
      return (
        <div className="App">
            <BoredApp />
        </div>
      );

    }
}

export default App;
