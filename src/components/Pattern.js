import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Pattern extends Component {
  static propTypes = {
    pattern: PropTypes.object.isRequired,
    deletePattern: PropTypes.func.isRequired
  }

  render() {
    const { pattern, deletePattern } = this.props

    let element

    element = (
      <div>
        <p className="columns small-10 left">
          {pattern.text}
        </p>
        <button className='columns small-2 right' onClick={() => deletePattern(pattern.id)}>Delete</button>
      </div>
    )

    return (
      <div className='box list columns small-10 medium-8 large-8'>
        {element}
      </div>
    )
  }
}
