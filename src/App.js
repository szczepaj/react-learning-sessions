import React, {Component, useState} from 'react'
import './App.css';
import {TodoApp} from "./components/lesson12/todo-app/components/App";
import ShoppingCartApp from "./components/lesson12/shopping-cart/containers/App";


const App = () => {

      return (

            <div className="App">
                  {/*<TodoApp />*/}
                <ShoppingCartApp />
            </div>
      );
}

export default App;
