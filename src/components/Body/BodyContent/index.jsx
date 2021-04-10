import React from 'react';
import './BodyContent.scss';

export default function BodyContent(params) {
  const listItems = () => {
    return new Array(500).fill('').map((e, i) => {
      return (
        <p style={{ border: '1px solid orange' }} key={i}>
          Lorem_{i + 1}
        </p>
      );
    });
  };

  return (
    <div className='body_content'>
      <div className='items'>{listItems()}</div>
    </div>
  );
}
