import React, {Component} from 'react';

import './itemstatusfilter.css';

export default class ItemStatusFilter extends Component {

  btns = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
  ];

  render() {

    const {filter, onFilterChange} = this.props;

    const btns = this.btns.map(({name,label}) => {
      const isActive = filter === name;
      const classBtn = isActive ? 'btn-info' : 'btn-outline-secondary'
      return (
          <button 
            type="button"
            className={`btn ${classBtn}`}
            key={name}
            onClick={() => onFilterChange(name)}
            >
            {label}
          </button>
      )
    });

    return (
      <div className="btn-group">
        {btns}
      </div>
    );
  }
}
