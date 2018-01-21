import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RemineTable.css';
import * as deepEqual from 'deep-equal';


class RemineTable extends Component {
    shouldComponentUpdate(nextProps) {
        //is deepEqual worth the overhead vs just re-rendering?
        //deepEqual used for array comparison to determine if re-render is necessary
        return (!deepEqual(nextProps.properties, this.props.properties))
    }


    render() {
        console.log("Table rendering")

        return (
            <div className="tableContainer">
                <p>Table length: <strong>{this.props.properties.length}</strong></p>
                <table className="remineTable">
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Building Type</th>
                            <th>Beds</th>
                            <th>Baths</th>
                        </tr>
                    </thead>
                    <tbody className="remineTableBody">
                        {this.props.properties.map(property => (
                            <tr key={property.id}>
                                <td>{property.address}</td>
                                <td>{property.buildingType}</td>
                                <td>{property.beds}</td>
                                <td>{property.baths}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

RemineTable.defaultProps = {
    properties: []
}

RemineTable.propTypes = {
    properties: PropTypes.array
}

export default RemineTable;
