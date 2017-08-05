import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App';
import Wrapper from './components/Wrapper';
import Picture from './components/Picture';
import List from './components/List';
import Numbers from './components/Numbers';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <App />
    <Wrapper />
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
