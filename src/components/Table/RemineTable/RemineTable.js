import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RemineTable.css';

class RemineTable extends Component {
    shouldComponentUpdate(nextProps) {
        console.log("--table - should update - ", nextProps.properties !== this.props.properties)
        return (nextProps.properties !== this.props.properties);
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
