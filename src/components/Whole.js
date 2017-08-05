import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'


const Whole = props => {
  let boxClass = `box`

  return (
    <div className={boxClass}>
      <div className='box list'>
      <AddTodo />
      </div>
      <VisibleTodoList />
    </div>
  )
}

export default Whole;
