// import React from 'react'
import PropTypes from 'prop-types'
import Pattern from './Pattern'
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import TodoItem from './TodoItem'
// import Footer from './Footer'
// import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
//
// const TODO_FILTERS = {
//   [SHOW_ALL]: () => true,
//   [SHOW_ACTIVE]: todo => !todo.completed,
//   [SHOW_COMPLETED]: todo => todo.completed
// }

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
