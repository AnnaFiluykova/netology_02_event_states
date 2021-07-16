import React from 'react';

const DropdownList = (props) => {
  return (
    <ul className='dropdown'>
      {props.DropdownItem.map((item) => {
        return (
          <li>
            <a>{item}</a>
          </li>
        )
      })
      }
    </ul>
  )
}

export default DropdownList;
