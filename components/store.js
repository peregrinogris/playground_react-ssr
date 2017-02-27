/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const isBrowser = typeof window !== 'undefined';

let preloadedState;
// eslint-disable-next-line no-underscore-dangle
if (isBrowser && window.__PRELOADED_STATE__) {
  // eslint-disable-next-line no-underscore-dangle
  preloadedState = window.__PRELOADED_STATE__;
}

export default () => createStore(
  reducers,
  preloadedState,
  compose(
    applyMiddleware(
      thunk,
    ),
    // Needed for redux-devtools-extension
    isBrowser && window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);
