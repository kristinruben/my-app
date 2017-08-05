import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryList = (props) => {
  let list = props.list.map((grocery) => {
    let id = grocery.id
    let name = grocery.name

    let handleButtonClick = () => props.handleButtonClick(id)

    return (
      <GroceryItem
        key={id}
        name={name}
        handleButtonClick={handleButtonClick}
      />
    )
  })

  return (
    <ul>
      {list}
    </ul>
  )
}

export default GroceryList;
