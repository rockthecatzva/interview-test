import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './CHANGEME.js';

class App extends Component {
    render() {
        console.log("Rendering App")
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Remine Frontend Developer Test</h2>
                </div>
                
                <Test />
            </div>
        );
    }
}

export default App;
