import React, {useState} from 'react';
import DropdownList from '../DropdownList';
import '../../css/main.css';

const list = [
  'Profile Information',
  'Change Password',
  'Bacome PRO',
  'Help',
   'Log Out'
]

const Dropdown = () => {
  const [drop, setDrop] = useState(false);

  return (
    <div className='container'>
      <div className={drop ? 'dropdown-wrapper open' : 'dropdown-wrapper'}>
        <button className='btn' onClick={() => setDrop(!drop)}>Account Settings</button>
        <DropdownList DropdownItem={list}/>
      </div>

    </div>

  )
};


export default Dropdown;
