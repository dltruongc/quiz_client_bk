import React from 'react';
import { MdDone } from 'react-icons/md';

import './Checkbox.scss';

export default function Checkbox({ value, id }) {
  return (
    <label htmlFor={id} className='checkbox'>
      <input type='checkbox' name={value} id={id} />
      <MdDone className='checkbox__icon' />
    </label>
  );
}
