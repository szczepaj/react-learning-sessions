import React, {Component, useState} from 'react'
import './App.css';
import {GoItApp} from "./components/lesson9/gotiApp/components/App";
import {BrowserRouter} from "react-router-dom";


const App = () => {

      return (
          <BrowserRouter>
            <div className="App">
                <GoItApp/>
            </div>
          </BrowserRouter>
      );
}

export default App;
