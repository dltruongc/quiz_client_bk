import React from 'react';

import BorderedIcon from '../../../components/BorderedIcon';
import './SideBarItem.scss';

export default function SideBarItem({ title, children, bgcolor }) {
  return (
    <div className='sidebar-item'>
      <BorderedIcon color={bgcolor}>{children}</BorderedIcon>
      <span className='sidebar-item__title'>{title}</span>
    </div>
  );
}
