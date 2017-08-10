import PropTypes from 'prop-types'
import Pattern from './Pattern'
import React, { Component } from 'react'

export default class PatternList extends Component {
  static propTypes = {
    patterns: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { patterns, actions } = this.props

    return (
      <div className='row'>
        {patterns.map(pattern =>
            <Pattern key={pattern.id} pattern={pattern} {...actions} />
          )}
      </div>
    )
  }
}
