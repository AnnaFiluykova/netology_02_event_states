import React from 'react';
import './style.css';

const Toolbar = (props) => {
  return (
    <div className='Toolbar'>
      {props.filters.map((filter) => {
        return (
          <button
            key={filter}
            onClick={props.onSelectFilter}
            className={filter === props.selected ? 'button active' : 'button'}
            value={filter}
          >
            {filter}
          </button>
        );
      })}
    </div>
  )
};

export default Toolbar;
