import React, { Component } from 'react';
import RemineTable from './components/Table/RemineTable/RemineTable';
import RangeSelector from './components/Filter/RangeSelector';
import Dropdown from './components/Filter/Dropdown';
import API from './API';
import './Test.css';

class Test extends Component {
    constructor(props) {
        super(props);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.state = {
            "connectionError": false,
            "locationData": [],
            "bedRange": {},
            "bathRange": {},
            "buildingTypes": [],
            "buildingTypeFilter": 0,
            "maxBeds": 0,
            "maxBaths": 0
        }
    }

    componentDidMount() {
        API.getBuildingTypes()
            .then(response => {
                this.setState({ "buildingTypes": response.data });
            })
            .catch((error) => {

                this.setState({ "connectionError": true });
            });

        API.getLocations()
            .then(response => {
                let maxBaths = 0,
                    maxBeds = 0;

                response.data.forEach(location => {
                    if (location.baths > maxBaths) { maxBaths = location.baths };
                    if (location.beds > maxBeds) { maxBeds = location.beds; };
                });

                this.setState({
                    "locationData": response.data,
                    maxBeds,
                    maxBaths,
                    "bedRange": { "start": 0, "end": maxBeds },
                    "bathRange": { "start": 0, "end": maxBaths }
                });
            })
            .catch((error) => {
                this.setState({ "connectionError": true });
            });
    }

    onFilterChange(e, target) {
        this.setState({ [target]: e })
    }

    render() {
        const { bedRange, bathRange, buildingTypes, buildingTypeFilter, maxBeds, maxBaths, locationData } = this.state;

        //this is concise, tho might unnecessarily run filters when search criteria is at default positions?
            //however the performance profile shows that it is quicker than checking each filter vs min & max bounds and then filtering
        const filteredData = locationData.filter((l) => { return (l.beds >= bedRange.start && l.beds <= bedRange.end) }) //filter bedRange
            .filter((l) => { return (l.baths >= bathRange.start && l.baths <= bathRange.end) })//filter bathRange
            .filter((l) => { return (!buildingTypeFilter || l.buildingType.id === buildingTypeFilter) })//filter buildingType
            .map((l) => { return { ...l, "buildingType": l.buildingType.name } })//change buildingType from an object to string for rendering
        

        return (
            <div className="testContainer">
                {this.state.connectionError &&
                    <p className="errorMessage" >
                        We are unable to make a connection to the database at this time. Please try again later or contact the site administrator. Sorry
                    </p>
                }

                {(this.state.connectionError !== true && locationData.length <= 0) &&
                    <p>LOADING...</p>
                }

                {(this.state.connectionError !== true && locationData.length > 0) &&
                    <div>
                        <div className="filterContainer">
                            <p className="filterTitle">Search Criteria</p>
                            <p className="inputLabel">NUMBER OF BEDS:</p>
                            <RangeSelector max={maxBeds} min={0} rangeSelected={bedRange} onChange={(e) => { this.onFilterChange(e, "bedRange") }} />
                            <p className="inputLabel">NUMBER OF BATHS:</p>
                            <RangeSelector max={maxBaths} min={0} rangeSelected={bathRange} onChange={(e) => { this.onFilterChange(e, "bathRange") }} />
                            <p className="inputLabel">BUILDING TYPE:</p>
                            <Dropdown options={[{ "name": "all", "id": 0 }, ...buildingTypes]} onChange={(e) => { this.onFilterChange(e, "buildingTypeFilter") }} />
                        </div>

                        {filteredData.length>0 && 
                            <RemineTable properties={filteredData} />
                        }

                        {filteredData.length===0 &&
                            <p className="errorMessage">Your search requirements yielded no results.</p>
                        }

                    </div>
                }

            </div>
        );
    }
}


export default Test;
