import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './API';
import Test from './CHANGEME.js';
import axios from 'axios';

class App extends Component {
    componentDidMount() {
        console.log("App mounted")

        axios.get('http://localhost:8001/buildingTypes')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        console.log("Rendering App")
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Remine Frontend Developer Test</h2>
                </div>
                <p className="App-intro">
                    Congratulations!! You have gotten farther than 75% of our applicants. Don't stop here!
                </p>
                <p>
                    Do what you need to do to get this table to render filtered and fast.
                </p>
                <Test />
            </div>
        );
    }
}

export default App;
