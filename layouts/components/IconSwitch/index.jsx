import React from 'react';
import './style.css';

const IconSwitch = (props) => {
  return (
    <span onClick={props.onSwitch} className='icon'>
      {props.icon === 'card'
        ?
        <span className="material-icons" data-view='list'>view_module</span>
        :
        <span className="material-icons" data-view='card'>view_list</span>
      }
    </span>
  )
};

export default IconSwitch;
