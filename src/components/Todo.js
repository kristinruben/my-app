import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
  <p className='box list'>
    {text}
  </p>
)

export default Todo
