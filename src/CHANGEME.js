import React, { Component } from 'react';
import RemineTable from './components/Table/RemineTable/RemineTable';
import RangeSelector from './components/Filter/RangeSelector';

class Test extends Component {
    render() {
        return (
            <div className="testContainer">
                <div className="filterContainer">
                    Your filters go here.
                    

                </div>
                <RemineTable properties={[]} />
            </div>
        );
    }
}

export default Test;
