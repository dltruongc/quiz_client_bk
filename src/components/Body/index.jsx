import React from 'react';
import './Body.scss';

import BreadCums from '../BreadCums';
import BorderedIcon from '../BorderedIcon';
import { MdArrowBack, MdMoreHoriz } from 'react-icons/md';
import BodyContent from './BodyContent';

export default function Body(props) {
  return (
    <div className='body'>
      <BreadCums
        prefix={
          <BorderedIcon color='grey'>
            <MdArrowBack />
          </BorderedIcon>
        }
        title='School'
        suffix={<MdMoreHoriz />}
      />
      <BodyContent />
    </div>
  );
}
