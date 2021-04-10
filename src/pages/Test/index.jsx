import React from 'react';

import AppBar from '../../components/AppBar';
import SideBar from '../../components/SideBar';
import BodyContainer from '../../components/BodyContainer';
import Body from '../../components/Body';

import './Test.scss';

export default function Test() {
  return (
    <div className='test'>
      <AppBar />
      <BodyContainer>
        <SideBar />
        <Body />
      </BodyContainer>
    </div>
  );
}
