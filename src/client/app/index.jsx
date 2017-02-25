import React from 'react';
import { render } from 'react-dom';

import Like from './Like.jsx';

const App = () => (
  <div>
    <p>Hello React!</p>
    <Like />
  </div>
);

render(<App/>, document.getElementById('app'));
