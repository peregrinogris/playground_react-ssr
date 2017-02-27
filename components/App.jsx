import React from 'react';
import { Link } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';

const store = createStore(todoApp);

const App = ({ children }) => (
  <Provider store={store}>
    <div>
      <h2>Welcome to my App</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      { children }
    </div>
  </Provider>
);

App.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element),
};

App.defaultProps = {
  children: [],
};

export default App;
