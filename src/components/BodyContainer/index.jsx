import React from 'react';

import './BodyContainer.scss';

export default function BodyContainer(props) {
  return <div className='body_container'>{props.children}</div>;
}
