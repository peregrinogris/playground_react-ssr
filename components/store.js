/* global window */
import { createStore } from 'redux';
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
);
