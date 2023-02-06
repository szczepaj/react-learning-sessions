import React, { Component } from 'react'
import './App.css';

import {Shopping} from "./components/lesson5/Shopping/Shopping";
import {Scroll} from "./components/lesson5/Scroll/Scroll";

class App extends Component {
    handleLogin = (state) => {
        console.log(state)
    }

    render() {
      return (
        <div className="App">
            <Scroll />
        </div>
      );

    }
}

export default App;
