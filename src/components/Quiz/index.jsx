import React from 'react';

import './Quiz.scss';

export default function Quiz({ quiz, key }) {
  return (
    <div className='quiz' key={key}>
      {JSON.stringify(quiz)}
    </div>
  );
}
