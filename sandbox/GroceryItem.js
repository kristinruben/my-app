import React from 'react';

const GroceryItem = (props) => {
  return (
    <li>
      {props.name}
      <button type="button" onClick={props.handleButtonClick}> x</button>
    </li>
  )
}

export default GroceryItem;
