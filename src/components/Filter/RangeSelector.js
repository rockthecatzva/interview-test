import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RangeSelector.css';
import { RangeSlider } from 'reactrangeslider';


class RangeSelector extends Component {
    shouldComponentUpdate(nextProps) {
        return (nextProps.min !== this.props.min || nextProps.max !== this.props.max || nextProps.rangeSelected !== this.props.rangeSelected);
    }


    render() {
        const { rangeSelected, min, max, onChange } = this.props;

        //inline styles for slider only, otherwise use !important
        const handleStyle = {
            width: '15px',
            height: '15px',
            top: '10px'
        }

        return (
            <div className="rangeContainer">
                <RangeSlider
                    value={rangeSelected}
                    min={min}
                    max={max}
                    step={1}
                    onChange={onChange}
                    handleStyle={handleStyle}
                />
                <div><div className="minVal" >{rangeSelected.start}</div><div className="maxVal" >{rangeSelected.end}</div></div>
            </div>
        );
    }
}

RangeSelector.defaultProps = {
    rangeSelected: {}
}

RangeSelector.propTypes = {
    rangeSelected: PropTypes.object,
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func
}

export default RangeSelector;
