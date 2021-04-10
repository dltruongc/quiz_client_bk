import React from 'react';
import './Body.scss';

export default function Body(props) {
  const listItems = () => {
    return new Array(500).fill('').map((e, i) => {
      return <p key={i}>Lorem{i}</p>;
    });
  };

  return <div className='body'>{listItems()}</div>;
}
