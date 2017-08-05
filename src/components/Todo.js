import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ text }) => (
  <div className='box list'>
    <p>{text}</p>
    <button>x</button>
  </div>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired
}

export default Todo
