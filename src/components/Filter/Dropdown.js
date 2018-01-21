import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

export default class Dropdown extends Component {
  render() {
    const { options, onChange} = this.props

    function onSelectItem(e){
      console.log("changed dropdown", e.target.value, typeof(e.target.value));
      onChange(parseInt(e.target.value, 10));
    }

    return (
      <div className="dropdown">
        <select onChange={onSelectItem} >
          {options.map((o,i)=>{
            return(<option key={i} value={i}>{o.name}</option>)
            })}
        </select>
        </div>
      )
    }
  }

  
  Dropdown.propTypes = {
    options: PropTypes.array,
    onChange: PropTypes.func,
  }
