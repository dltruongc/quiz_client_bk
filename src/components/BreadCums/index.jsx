import React from 'react';
import './BreadCums.scss';

export default function BreadCums({ title, prefix, suffix }) {
  return (
    <div className='bread_cums'>
      <div className='bread_cums__prefix'>
        {prefix}
        <h3 className='bread_cums__title'>{title}</h3>
      </div>
      {suffix}
    </div>
  );
}
