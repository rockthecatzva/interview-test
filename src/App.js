import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from './API';
import Test from './CHANGEME.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "locationData": [],
            "bedRange": [],
            "bathRange": [],
            "buildingTypes": [],
            "buildingTypeFilter": "",
            "maxBeds": 0,
            "maxBaths": 0
        }
    }

    componentDidMount() {
        console.log("App mounted")

        API.getBuildingTypes()
            .then(response => {
                this.setState({ "buildingTypes": response.data });
            })
            .catch(function (error) {
                console.log(error);
            });

        API.getLocations()
            .then(response => {
                let maxBaths = 0,
                    maxBeds = 0;
                    
                response.data.forEach(location => {
                    if (location.baths > maxBaths) { maxBaths = location.baths };
                    if (location.beds > maxBeds) { maxBeds = location.beds };
                });

                console.log(maxBaths, maxBeds)
                this.setState({ "locationData": response.data,
                                maxBeds,
                                maxBaths
                             });
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
