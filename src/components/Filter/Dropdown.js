import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as deepEqual from 'deep-equal';

export default class Dropdown extends Component {
  shouldComponentUpdate(nextProps) {
    return (!deepEqual(nextProps.options, this.props.options));
}


  render() {
    const { options, onChange } = this.props;
    
    return (
      <div className="dropdown">
        <select onChange={(e)=>{onChange(parseInt(e.target.value, 10));}} >
          {options.map((o, i) => {
            return (<option key={i} value={i}>{o.name}</option>)
          })}
        </select>
      </div>
    );
  }
}


Dropdown.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func
}
