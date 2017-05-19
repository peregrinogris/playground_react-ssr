import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <h2>Welcome to my App</h2>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    { children }
  </div>
);

App.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
};

App.defaultProps = {
  children: [],
};

export default App;
