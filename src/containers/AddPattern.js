import React from 'react'
import { connect } from 'react-redux'
import { addPattern } from '../actions'

let AddPattern = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addPattern(input.value))
        input.value = ''
      }}>
        <input placeholder='Pattern Title' ref={node => {
          input = node
        }} />
        <button type='submit'>
          Add Pattern
        </button>
      </form>
    </div>
  )
}
AddPattern = connect()(AddPattern)

export default AddPattern
