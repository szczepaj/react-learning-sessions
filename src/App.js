import React, { Component } from 'react'
import './App.css';
import {LoginForm} from "./components/lesson4/LoginForm";
import {LoginFormFormik} from "./components/lesson4/LoginFormFormik";
import {LoginFormHook} from "./components/lesson4/LoginFormHook";

class App extends Component {
    handleLogin = (state) => {
        console.log(state)
    }

    render() {
      return (
        <div className="App">
            Let's sign in
            {/*<LoginForm handleLogin={this.handleLogin} />*/}
            <LoginFormFormik handleLogin={this.handleLogin} />
            {/*<LoginFormHook handleLogin={this.handleLogin} />*/}
        </div>
      );

    }
}

export default App;
