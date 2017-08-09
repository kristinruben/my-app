import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import patternApp from './reducers'
import App from './components/App'
import './stylesheets/index.css'

let store = createStore(patternApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
