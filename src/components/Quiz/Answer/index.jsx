import React from 'react';
import Checkbox from '../../Checkbox';
import './Answer.scss';

export default function Answer({ value, key }) {
  return (
    <div className='answer'>
      <Checkbox />
      {value}
      {key}
    </div>
  );
}
