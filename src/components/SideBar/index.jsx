import React from 'react';

import './SideBar.scss';

import { MdLibraryBooks, MdPerson, MdDescription } from 'react-icons/md';
import SideBarItem from './SideBarItem';

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__title'>Collections</div>
      <div className='sidebar__items'>
        <SideBarItem bgcolor='#FC77A1' title='School'>
          <MdLibraryBooks size='16px' />
        </SideBarItem>
        <SideBarItem bgcolor='#70C4BE' title='Person'>
          <MdPerson size='16px' />
        </SideBarItem>
        <SideBarItem bgcolor='#AE68E6' title='Design'>
          <MdDescription size='16px' />
        </SideBarItem>
      </div>
    </div>
  );
}
