import React from 'react'
import AddPattern from './AddPattern'
import PatternList from '../components/PatternList'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PatternActions from '../actions'

const Whole = ({patterns, actions}) => (
  <div>
    <div className='columns box list row center small-10 medium-8 large-8'>
      <AddPattern className='center' />
    </div>
    <div>
      <PatternList patterns={patterns} actions={actions} />
    </div>
  </div>
)

const mapStateToProps = state => ({
  patterns: state.patterns
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(PatternActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Whole)
