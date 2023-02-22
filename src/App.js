import React, {Component, useState} from 'react'
import './App.css';
import {Starter} from "./components/lesson9/routeProject/Starter";
import {Form} from "./components/lesson9/reducer/Form";
import {ProductApp} from "./components/lesson10/ProductsApp/ProductsApp";
import {LoginApp} from "./components/lesson10/LoginForm/LoginApp";


const App = () => {

      return (

            <div className="App">
               <ProductApp />
            </div>
      );
}

export default App;
