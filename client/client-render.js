/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import routes from '../server/routes';
import newStore from '../components/store';

ReactDOM.render(
  <Provider store={newStore()}>
    <Router routes={routes} history={createBrowserHistory()} />
  </Provider>,
  document.getElementById('app'),
);
