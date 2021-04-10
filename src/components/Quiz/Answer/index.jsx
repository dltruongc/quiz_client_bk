import React from 'react';
import './Answer.scss';
import { MdDone } from 'react-icons/md';

export default function Answer({ quizId, name, key, multi }) {
  return (
    <label htmlFor={key} className='answer'>
      <input type={multi ? 'checkbox' : 'radio'} name={quizId} id={key} />
      {(multi && <MdDone className='answer__icon' />) || (
        <div className='answer__icon' />
      )}
      <div className='answer__content'>
        <div className='answer__text'>{name}</div>
      </div>
    </label>
  );
}
