import React from 'react';
import Wrapper from './Wrapper';
import Picture from './Picture';
import List from './List';

import '../stylesheets/index.css'

const Box = props => {
  let boxClass = `box ${props.boxClass}`

  let paragraph
  if (props.paragraph) {
    paragraph = <p>{props.paragraph}</p>
  }

  return (
    <div className={boxClass}>
      <h1>{props.header}</h1>
      {paragraph}
      <Picture />
      <List className="list" />
    </div>
  )
}

export default Box;
