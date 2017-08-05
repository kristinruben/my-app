import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';

import App from './components/App';
import Box from './components/Box';
import TwitterFeed from './components/TwitterFeed'
import data from './constants/data'

import registerServiceWorker from './registerServiceWorker';

let wrapperParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed \
  ullamcorper nibh, id efficitur eros. Suspendisse ultricies est ut mi \
  volutpat, quis faucibus sem malesuada. Pellentesque pellentesque ex at \
  posuere viverra. Nunc maximus massa nec lectus malesuada sodales. Lorem \
  ipsum dolor sit amet, consectetur adipiscing elit. Cras eget malesuada \
  tortor.'

ReactDOM.render(
  <div>
    <App />
    <Box
      boxClass='wrapper'
      header='I Am the Wrapper'
      paragraph={wrapperParagraph}
    />
  </div>,
  document.getElementById('root')
);

registerServiceWorker();
