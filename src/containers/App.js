import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Whole from '../components/Whole'
import * as PatternActions from '../actions'

const App = ({patterns, actions}) => (
  <div>
    <Header />
    <Whole />
  </div>
)

export default App
