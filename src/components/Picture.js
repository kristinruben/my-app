import React from 'react';
import GroceryList from './GroceryList'

let that = GroceryList;

const Picture = props => {
  return (
    <div className='box picture'>
      <h2>Here is a picture</h2>
        <ul>
          {that.list}
        </ul>
    </div>
  )
}

export default Picture;
