import React, { Component } from 'react'
import './App.css';
import {BoredApp} from "./components/lesson6/BoredApp/BorderApp";
import {Article} from "./components/lesson6/Article";


class App extends Component {
    handleLogin = (state) => {
        console.log(state)
    }

    render() {
      return (
        <div className="App">
            {/*<BoredApp />*/}
            <Article />
        </div>
      );

    }
}

export default App;
