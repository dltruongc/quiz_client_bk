import React from 'react';

import './BorderedIcon.scss';

export default function BorderedIcon({ children, color = 'pink' }) {
  return (
    <div className='bordered-icon' style={{ backgroundColor: color }}>
      {children}
    </div>
  );
}
