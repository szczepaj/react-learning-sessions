import { Component } from 'react'
import './App.css';
import {Counter} from "./components/lesson-3/Counter/Counter";

class App extends Component {
    render() {
      return (
        <div className="App">
            <Counter step={1} />
        </div>
      );

    }
}

export default App;
