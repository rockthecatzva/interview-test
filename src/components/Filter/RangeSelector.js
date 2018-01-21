import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RangeSelector.css';

class RangeSelector extends Component {
    render() {    
        return (
            <div className="rangeContainer">
            </div>
        );
    }
}

RangeSelector.defaultProps = {
    rangeBounds: [],
    rangeSelected: []
}

RangeSelector.propTypes = {
    rangeBounds: PropTypes.array,
    rangeSelected: PropTypes.array
}

export default RangeSelector;
