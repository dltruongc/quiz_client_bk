import React from 'react';

import {
  MdDashboard,
  MdMenu,
  MdFolderOpen,
  MdAccountCircle,
  MdSearch,
  MdNotifications,
} from 'react-icons/md';

import './AppBar.scss';

export default function AppBar() {
  return (
    <div className='app-bar'>
      <div className='app-bar__left'>
        <a href='#' className='app-bar__left__item'>
          <MdMenu size='24px' title='Menu' />
        </a>
        <a href='#' className='app-bar__left__item'>
          <MdDashboard size='24px' title='Dashboard' />
          <span>Dashboard</span>
        </a>
        <a href='#' className='app-bar__left__item'>
          <MdFolderOpen size='24px' title='Colletions' />
          <span>Colletions</span>
        </a>
      </div>

      <div className='app-bar__right'>
        <a href='#' className='app-bar__right__item'>
          <MdSearch size='24px' title='Menu' />
        </a>
        <a href='#' className='app-bar__right__item'>
          <MdNotifications size='24px' title='Dashboard' />
        </a>
        <a href='#' className='app-bar__right__item'>
          <span>DLTruongc</span>
          <MdAccountCircle size='24px' title='Colletions' />
        </a>
      </div>
    </div>
  );
}
