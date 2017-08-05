import React from 'react';
import Picture from './Picture';
import List from './List';

import '../stylesheets/index.css'

const Box = props => {
  let boxClass = `box`

  return (
    <div className={boxClass}>
      <h2>{props.header}</h2>
      <List className='list' />
      <Picture />
    </div>
  )
}

export default Box;
