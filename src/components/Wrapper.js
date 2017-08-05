import React from 'react';
import Picture from './Picture';
import Numbers from './Numbers';
import List from './List';

const Wrapper = props => {
  return (
    <div className='box wrapper'>
      <h1>I Am the Wrapper</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
        ullamcorper nibh, id efficitur eros. Suspendisse ultricies est ut mi
        volutpat, quis faucibus sem malesuada. Pellentesque pellentesque ex at
        posuere viverra. Nunc maximus massa nec lectus malesuada sodales. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Cras eget malesuada
        tortor.
      </p>
      <Numbers />
      <Picture />
      <List />
    </div>
  )
}

export default Wrapper;
